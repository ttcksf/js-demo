const hamburger = document.querySelector(".hamburger");
const menus = document.querySelector(".menus");
// console.log(hamburger);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  menus.classList.toggle("show");
});
