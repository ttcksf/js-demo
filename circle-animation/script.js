const mask = document.querySelector(".mask");

//角度の初期状態(0°)
let angle = 0;

function drawCircle() {
  //角度が365°未満のとき
  if (angle < 365) {
    //角度を2°ずつ増やす
    angle += 2;
    //角度をconic-gradientの角度に代入
    mask.style.backgroundImage = `conic-gradient(transparent ${angle}deg, white ${angle}deg)`;
    return;
  }
}
window.addEventListener("scroll", () => {
  // スクロール位置がimg要素の位置を超えたらアニメーションを開始する
  if (window.scrollY > mask.offsetTop + 100) {
    //アニメーションを開始
    setInterval(drawCircle, 100);
  }
});
