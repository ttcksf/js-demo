const progress = document.querySelector("#progress");
const progressResult = document.querySelector("#progressResult");
let percentage;

function animation() {
  percentage = progress.value;
  interval = setInterval("increment()", 100);
}

function increment() {
  percentage += 1;
  progress.value = percentage;
  progressResult.innerHTML = progress.value;

  if (percentage === 100) {
    clearInterval(interval);
  }

  console.log(progress.value);
}
