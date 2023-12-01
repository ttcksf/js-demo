const uploader = document.querySelector(".uploader");
const uploaderInput = document.querySelector(".uploader input");
const preview = document.querySelector(".uploader img");
const width = document.querySelector(".width input");
const height = document.querySelector(".height input");
const ratio = document.querySelector(".ratio input");
const quality = document.querySelector(".quality input");
const downloadBtn = document.querySelector(".download");
let uploadedRatio;

const uploaded = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  console.log(file);
  preview.src = URL.createObjectURL(file);
  preview.addEventListener("load", () => {
    // プレビュー時のスタイル変更
    uploader.classList.add("active");
    // 読み込まれた画像のサイズを取得して入力欄に入力する
    width.value = preview.naturalWidth;
    height.value = preview.naturalHeight;
    uploadedRatio = preview.naturalWidth / preview.naturalHeight;
  });
};
// 横幅サイズを手動で変更したときの関数
width.addEventListener("keyup", () => {
  // 縦横比が固定の場合と固定じゃない場合の縦幅の自動計算
  const ratioHeight = ratio.checked
    ? width.value / uploadedRatio
    : height.value;

  console.log(ratioHeight);
  // 整数値で入力する
  height.value = Math.floor(ratioHeight);
});

// 縦幅サイズを手動で変更したときの関数
height.addEventListener("keyup", () => {
  // 縦横比が固定の場合と固定じゃない場合の横幅の自動計算
  const ratioWidth = ratio.checked ? height.value * uploadedRatio : width.value;

  console.log(ratioWidth);
  // 整数値で入力する
  width.value = Math.floor(ratioWidth);
});

const resizeDownload = () => {
  const canvasTag = document.createElement("canvas");
  const ctx = canvasTag.getContext("2d");
  canvasTag.width = width.value;
  canvasTag.height = height.value;
  // プレビュー画像を左上を起点にしてダウンロード用の画像データを作成する
  ctx.drawImage(preview, 0, 0, canvasTag.width, canvasTag.height);
  // document.body.appendChild(canvasTag);
  // 画質ダウンを選択したときとそうでない時の画質の値
  const imgQuality = quality.checked ? 0.8 : 1.0;
  downloadBtn.href = canvasTag.toDataURL("image/png", imgQuality);

  downloadBtn.download = new Date().getTime();
};

downloadBtn.addEventListener("click", resizeDownload);

uploaderInput.addEventListener("change", uploaded);
