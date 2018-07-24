const navigationButton = document.querySelector(".nav-menu-button");

const navigationMenu = document.getElementById("navigation");

navigationButton.addEventListener("click", openCloseMenu);

navigationMenu.addEventListener("click", openCloseMenu);

function openCloseMenu() {
  navigationMenu.classList.toggle("open-menu");
}
