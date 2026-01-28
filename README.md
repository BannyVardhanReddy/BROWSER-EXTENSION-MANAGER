# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help improve front-end skills by building realistic projects.

## Table of contents

* [Overview](#overview)

  * [The challenge](#the-challenge)
  * [Links](#links)
* [My process](#my-process)

  * [Built with](#built-with)
  * [What I learned](#what-i-learned)
  * [Continued development](#continued-development)
* [Author](#author)

---

## Overview

### The challenge

Users should be able to:

* Toggle extensions between active and inactive states
* Filter active and inactive extensions
* Remove extensions from the list
* Switch between light and dark themes
* View the optimal layout depending on the device's screen size
* See hover and focus states for interactive elements

### Links

* Live Site URL: [https://browser-extension-managerui.netlify.app/](https://browser-extension-managerui.netlify.app/)
* GitHub Repository: [https://github.com/BannyVardhanReddy/BROWSER-EXTENSION-MANAGER](https://github.com/BannyVardhanReddy/BROWSER-EXTENSION-MANAGER)

---

## My process

### Built with

* Semantic HTML5
* CSS custom properties (CSS variables)
* CSS Grid and Flexbox
* Mobile-first workflow
* Vanilla JavaScript
* Local JSON data
* localStorage for state persistence

### What I learned

This project helped reinforce core front-end concepts without relying on frameworks. Key learnings include:

* Dynamically rendering UI components from a JSON data source
* Managing UI state (active/inactive, removed items) using localStorage
* Implementing light and dark themes using CSS variables
* Using event delegation for better performance and cleaner JavaScript
* Structuring responsive layouts with CSS Grid

Example of persisting extension state:

```js
savedStates[extName] = circle.classList.contains("active");
localStorage.setItem("extensionStates", JSON.stringify(savedStates));
```

### Continued development

In future projects, I plan to focus on:

* Improving accessibility (ARIA roles and keyboard navigation)
* Writing more scalable and maintainable CSS class naming conventions
* Refactoring JavaScript into smaller, reusable functions
* Optimizing rendering logic for larger datasets
* Rebuilding similar projects using a framework like React

---

## Author

* Name: Ajjugunti Banny Vardhan Reddy
* GitHub: [https://github.com/BannyVardhanReddy](https://github.com/BannyVardhanReddy)
* Frontend Mentor: [https://www.frontendmentor.io/profile/BannyVardhanReddy](https://www.frontendmentor.io/profile/BannyVardhanReddy)
