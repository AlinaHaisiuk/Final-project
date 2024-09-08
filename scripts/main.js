const burgerMenu = document.querySelector(".burger");

const navMenu = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});
