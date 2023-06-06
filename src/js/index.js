// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const navOptions = document.getElementById("navOptions");
const menuIcon = document.getElementById("menuIcon");
const hamburguerIcon = document.getElementById("hamburguerIcon");
const logo = document.getElementById("logo");
const navContainer = document.getElementById("navContainer");
const bullet1 = document.getElementById("bullet1");
const bullet2 = document.getElementById("bullet2");
const bullet3 = document.getElementById("bullet3");

const gallery = document.getElementById("gallery");

menuIcon.addEventListener("click", () => {
  navOptions.classList.toggle("nav__container--close");
  hamburguerIcon.classList.toggle("nav__menu-icon--close");
  logo.classList.toggle("nav__logo--close");
  navContainer.classList.toggle("nav__logo-menu-container--close");
});

bullet1.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery__bullet--active")) return;
  e.target.classList.add("gallery__bullet--active");
  bullet2.classList.remove("gallery__bullet--active");
  bullet3.classList.remove("gallery__bullet--active");
  gallery.style.transform = `translateX(0%)`;
});

bullet2.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery__bullet--active")) return;
  e.target.classList.add("gallery__bullet--active");
  bullet1.classList.remove("gallery__bullet--active");
  bullet3.classList.remove("gallery__bullet--active");
  gallery.style.transform = `translateX(-46.5%)`;
});

bullet3.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery__bullet--active")) return;
  e.target.classList.add("gallery__bullet--active");
  bullet2.classList.remove("gallery__bullet--active");
  bullet1.classList.remove("gallery__bullet--active");
  gallery.style.transform = `translateX(-93%)`;
});
