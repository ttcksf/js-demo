const progress = document.querySelector("#progress");
const progressResult = document.querySelector("#progressResult");
// progress.value = 80;
// progressResult.innerHTML = progress.value;
// 進捗の値
let percentage;
let interval;

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

// ボタンを押したときに発動する関数
function animation() {
  percentage = progress.value;
  interval = setInterval("increment()", 100);
}
