const upper = document.querySelector(".upper");
const lower = document.querySelector(".lower");
const btn = document.querySelector(".btn");
// console.log(upper);
// console.log(lower);
// console.log(btn);

// イベントはblurかinput
upper.addEventListener("input", () => {
  upper.value = upper.value.toUpperCase();
});
lower.addEventListener("blur", () => {
  lower.value = lower.value.toLowerCase();
});
