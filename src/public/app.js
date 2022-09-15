const turnToggle = (element) => element.classList.toggle("open");
const burgerMenu = document.querySelector(".burger");
const sides = document.querySelectorAll(".side");
const header = document.querySelector("header");
burgerMenu.addEventListener("click", () => {
  [burgerMenu, sides[0], sides[1], header].forEach((value) => {
    turnToggle(value);
  });
});
