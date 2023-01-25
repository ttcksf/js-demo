const progress = document.querySelector("#progress");
const progressResult = document.querySelector("#progressResult");
// 進捗の値
let percentage;
let interval;

// ボタンを押したときに発動する関数
function animation() {
  percentage = progress.value;
  interval = setInterval("increment()", 100);
}

// 進捗状況の数字を増やす関数
function increment() {
  percentage += 1;
  // 進捗状況はprogressのvalueと同じになる
  progress.value = percentage;
  progressResult.innerHTML = progress.value;

  if (percentage === 100) {
    // setIntervalを止めるための関数
    clearInterval(interval);
  }
  console.log(progress.value);
}
