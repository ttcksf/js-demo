const input = document.querySelector(".input");
const preview = document.querySelector(".preview");

input.addEventListener("change", () => {
  const fileReader = new FileReader();
  // 画像はsrc属性に使うためのURLで読み込む
  fileReader.readAsDataURL(input.files[0]);
  fileReader.addEventListener("load", () => {
    const url = fileReader.result;
    // console.log(url);
    // imgタグを作る
    const img = new Image();
    // console.log(img);
    img.src = url;
    preview.appendChild(img);
  });
});
