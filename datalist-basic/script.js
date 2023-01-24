const input = document.querySelector("input");
const dataListResult = document.querySelector("#dataListResult");
input.addEventListener("change", (e) => {
  const value = input.value;
  dataListResult.innerHTML = value;
});
