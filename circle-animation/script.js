const mask = document.querySelector(".mask");
const circleItem1 = document.querySelector(".circle-item1");
const circleItem2 = document.querySelector(".circle-item2");
const circleItem3 = document.querySelector(".circle-item3");
const circleItem4 = document.querySelector(".circle-item4");
const circleItem5 = document.querySelector(".circle-item5");
const circleItem6 = document.querySelector(".circle-item6");

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
    setTimeout(() => {
      circleItem1.classList.add("anime");
    }, 200);
    setTimeout(() => {
      circleItem2.classList.add("anime");
    }, 300);
    setTimeout(() => {
      circleItem3.classList.add("anime");
    }, 600);
    setTimeout(() => {
      circleItem4.classList.add("anime");
    }, 900);
    setTimeout(() => {
      circleItem5.classList.add("anime");
    }, 1100);
    setTimeout(() => {
      circleItem6.classList.add("anime");
    }, 1400);
  }
});
