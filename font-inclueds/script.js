const arr = ["Web制作", "Webマーケ", "動画編集"];
const str = "Web制作";

// let result1 = arr.includes("Web制作");
// 第二引数で配列内の場所まで検証できる
let result1 = arr.includes("Web制作", 0);

// 完全一致であることまで検証する
// let result1 = arr.includes("web制作");
// テキストから文字の有無も確認できる
let result2 = str.includes("Web");

const container = document.querySelector(".container");
container.innerHTML = result1;
const wrapper = document.querySelector(".wrapper");
wrapper.innerHTML = result2;
