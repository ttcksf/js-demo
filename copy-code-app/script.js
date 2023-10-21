const htmlBox = document.querySelector(".htmlBox");
const htmlBtn = document.querySelector(".htmlBtn");
const cssBox = document.querySelector(".cssBox");
const cssBtn = document.querySelector(".cssBtn");
htmlBtn.addEventListener("click", () => {
  htmlBox.select();
  navigator.clipboard.writeText(htmlBox.value);
  htmlBtn.innerHTML = "Copied!";
});
cssBtn.addEventListener("click", () => {
  cssBox.select();
  navigator.clipboard.writeText(cssBox.value);
  cssBtn.innerHTML = "Copied!";
});
