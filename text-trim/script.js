let text1 = " こんにちは　";
// 文字の途中の空白は削除されない
// let text1 = " こんに ちは　";
let text2 = text1.trim();
// let text2 = text1.trimStart();
// let text2 = text1.trimEnd();

console.log("text1:", text1);
console.log("text2:", text2);

// ブラウザのHTMLで表示させる場合にはtrimがなくても自動で削除される
const container = document.querySelector(".container");
container.innerHTML = text1;
const wrapper = document.querySelector(".wrapper");
// ブラウザのHTMLでも空白を表示したいときは特殊記号を使う
let text3 = "&nbsp;&nbsp;&nbsp;段落のために空白をつけたいです。";
wrapper.innerHTML = text2;
// wrapper.innerHTML = text3;
