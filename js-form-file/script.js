const input = document.querySelector(".input");
const preview = document.querySelector(".preview");

input.addEventListener("change", () => {
  // JSでファイル参照するためのメソッドなどがあるクラス
  const fileReader = new FileReader();
  // テキストの読み込み
  fileReader.readAsText(input.files[0]);
  // 複数添付ができるためfilesプロパティは配列で格納されている
  // console.dir(input);
  fileReader.addEventListener("load", () => {
    // console.log(fileReader);
    const text = fileReader.result;
    // console.log(text);
    preview.textContent = text;
  });
});
