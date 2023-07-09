const canvas1 = document.querySelector("#canvas1");
const canvas2 = document.querySelector("#canvas2");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");

const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");

// 図形の背景色を変更する（fillRectの前で指定する）
ctx1.fillStyle = "#666";
// 図形を描く（水平方向の座標、垂直方向の座標、横幅、縦幅）
// 塗りつぶした矩形を現在の fillStyle に基づいて描くのが注意点
ctx1.fillRect(0, 0, 100, 100);

// 描画した画像をimgタグで表示する(canvasからurlを取得する)
const url1 = canvas1.toDataURL();
console.log(url1);
img1.src = url1;

const image = new Image();
image.src = "./images/heart.png";
image.onload = () => {
  // 外部の画像を埋め込む（画像のパス、水平方向の座標、垂直方向の座標、横幅、縦幅）
  ctx2.drawImage(image, 0, 0, 100, 100);
  const url2 = canvas2.toDataURL();
  console.log(url2);
  img2.src = url2;
};
