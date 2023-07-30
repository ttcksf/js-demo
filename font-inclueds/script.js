const arr = ["Web制作", "Webマーケ", "動画編集"];

// let result1 = arr.includes("Web制作");
// 第二引数で配列内の場所まで検証できる
let result1 = arr.includes("Web制作", 1);
// 完全一致であることまで検証する
// let result1 = arr.includes("web制作");

const container = document.querySelector(".container");
container.innerHTML = result1;
const wrapper = document.querySelector(".wrapper");
wrapper.innerHTML = text1;
