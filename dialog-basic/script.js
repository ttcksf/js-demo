const btn = document.querySelector("#btn");
const modalBtn = document.querySelector("#modalBtn");
const dialog = document.querySelector("#dialog");

btn.addEventListener("click", () => {
  dialog.showModal();
});

modalBtn.addEventListener("click", () => {
  dialog.close();
});
