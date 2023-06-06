// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const navOptions = document.getElementById("navOptions");
const menuIcon = document.getElementById("menuIcon");
const hamburguerIcon = document.getElementById("hamburguerIcon");
const logo = document.getElementById("logo");
const navContainer = document.getElementById("navContainer");

menuIcon.addEventListener("click", () => {
  navOptions.classList.toggle("nav__container--close");
  hamburguerIcon.classList.toggle("nav__menu-icon--close");
  logo.classList.toggle("nav__logo--close");
  navContainer.classList.toggle("nav__logo-menu-container--close");
});
