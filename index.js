const container = document.getElementById("extension");
let extensions = [];
let currentFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => {
      if (!response.ok) {
        console.log("Error loading JSON");
      }
      return response.json();
    })
    .then((extension) => {
      extensions = extension;
      render(currentFilter);
    })
    .catch((error) => {
      console.log(error);
    });
});

function render(filter = "all") {
  container.innerHTML = "";

  const savedStates = JSON.parse(localStorage.getItem("extensionStates")) || {};
  const removedExtensions =
    JSON.parse(localStorage.getItem("removedExtensions")) || [];

  extensions.forEach((ext) => {
    if (removedExtensions.includes(ext.name)) {
      return;
    }

    const isActive =
      savedStates[ext.name] !== undefined
        ? savedStates[ext.name]
        : ext.isActive;

    if (filter === "active" && !isActive) {
      return;
    }

    if (filter === "inactive" && isActive) {
      return;
    }

    const div_card = document.createElement("div");
    div_card.classList.add("card");
    div_card.dataset.name = ext.name;

    div_card.innerHTML = `
                <div class="top">
                    <img src= ${ext.logo} alt="">
                    <div class="data">
                        <p class = "title">${ext.name}</p>
                        <p class = "description">${ext.description}</p>
                    </div>
                </div>
                <div class="bottom">
                    <button class = "filter remove">Remove</button>
                    <div class="toggle state ${isActive ? "act" : ""}">
                        <div class = "circle ${isActive ? "active" : ""}"></div>
                    </div>
                </div>
                `;
    container.appendChild(div_card);
  });
}
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    const circle = e.target;
    const state = circle.parentElement;
    const card = circle.closest(".card");
    const extName = card.dataset.name;

    circle.classList.toggle("active");
    state.classList.toggle("act");

    const savedStates =
      JSON.parse(localStorage.getItem("extensionStates")) || {};

    savedStates[extName] = circle.classList.contains("active");

    localStorage.setItem("extensionStates", JSON.stringify(savedStates));

    render(currentFilter);
  }

  if (e.target.classList.contains("remove")) {
    const card = e.target.closest(".card");
    const extName = card.dataset.name;

    const removedExtensions =
      JSON.parse(localStorage.getItem("removedExtensions")) || [];

    if (!removedExtensions.includes(extName)) {
      removedExtensions.push(extName);
      localStorage.setItem(
        "removedExtensions",
        JSON.stringify(removedExtensions),
      );
    }

    card.style.transition = "opacity 0.3s ease";
    card.style.opacity = 0;
    setTimeout(() => card.remove(), 300);
  }
});

document.querySelector(".filters").addEventListener("click", (e) => {
  const filters = ["all","actived","inactive"];
  filters.forEach((filter)=>{
    const current = document.querySelector("."+filter);
    if(current.classList.contains("act")){
      current.classList.remove("act");
    }
  })
  if (e.target.classList.contains("all")) {
    currentFilter = "all";
    e.target.classList.add("act");
    render(currentFilter);
  }
  if (e.target.classList.contains("actived")) {
    currentFilter = "active";
    e.target.classList.add("act");
    render(currentFilter);
  }
  if (e.target.classList.contains("inactive")) {
    currentFilter = "inactive";
    e.target.classList.add("act");
    render(currentFilter);
  }
});

// Toggle Mode
const mode = document.getElementById("mode");

mode.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  const mode_img = document.getElementById("mode-img");
  if(document.body.classList.contains("dark")){
    mode_img.src = "./assets/images/icon-sun.svg";
  }else{
    mode_img.src = "./assets/images/icon-moon.svg";
  }
});
