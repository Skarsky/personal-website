// DOM Selectors
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set initial menu state
let isMenuShown = false;

// Menu toggle event
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!isMenuShown) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Reset menu state
    isMenuShown = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Reset menu state
    isMenuShown = false;
  }
}
