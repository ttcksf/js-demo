const result = document.querySelector("#result");
const btn = document.querySelector("#btn");

let value = null;

btn.addEventListener("click", () => {
  if (value != null) {
    console.count(value);
  } else {
    let total = 0;
    for (let i = 1; i < 2000000000; i++) {
      total += 1;
    }
    value = total;
    console.count(total);
  }
});
