const box = document.querySelector(".box");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (matchMedia("(max-width: 429px)").matches === true) {
    box.style.backgroundColor = "blue";
  }
  if (
    matchMedia("(min-width: 429px) and (max-width: 1025px)").matches === true
  ) {
    box.style.backgroundColor = "green";
  }
  if (matchMedia("(min-width: 1026px)").matches === true) {
    box.style.backgroundColor = "red";
  }
});

// 指定に合っていればtrue,違っていたらfalse
console.log(matchMedia("(min-width: 429px)"));
