const image = document.querySelector(".image");
const like = document.querySelector(".like");

image.addEventListener("dblclick", () => {
  like.classList.add("active");
});
