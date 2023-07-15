function createLines() {
  let line = document.createElement("div");
  line.setAttribute("class", "line");
  document.body.appendChild(line);

  // Math.random()で0〜1未満の乱数
  // 光の横幅
  line.style.width = Math.random() * 12 + "px";
  // 光の水平方向の位置。上限は画面の幅
  line.style.left = Math.random() * innerWidth + "px";
  // 光の遅延
  line.style.animationDuration = 3 + Math.random() * 12 + "s";

  console.log("width:", line.style.width);
  console.log("left:", line.style.left);
  console.log("duration:", line.style.animationDuration);

  // 光が昇りながら消えるまでの時間
  setTimeout(function () {
    document.body.removeChild(line);
  }, 6000);
}
// 一定の時間を置いて繰り返す（光の量に比例する）
setInterval(function () {
  createLines();
}, 700);
