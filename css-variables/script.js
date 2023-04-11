const darkBtn = document.querySelector("#dark-btn");
const lightBtn = document.querySelector("#light-btn");

darkBtn.addEventListener("click", () => {
  document.documentElement.style.setProperty("--bg-mode", "black");
});

lightBtn.addEventListener("click", () => {
  document.documentElement.style.setProperty("--bg-mode", "white");
});
