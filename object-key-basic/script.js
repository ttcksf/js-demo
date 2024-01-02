const text1 = document.querySelectorAll('.text');
// NodeList
console.log(text1);
text1.forEach((txt) => {
  console.log(txt.textContent);
});

const text2 = document.getElementsByClassName('text');
// HTMLCollectionは配列風オブジェクトでmapやforEachのような配列に使うものは使えない
console.log(text2);
// text2.forEach((txt) => {
//   console.log(txt.textContent);
// });
// for文はいろんなデータに使用できる
for (const txt of text2) {
  console.log(txt.textContent);
}
// 配列に変換すれば使えるようになる
console.log(text2);
console.log(Array.from(text2));
Array.from(text2).forEach((txt) => {
  console.log(txt.textContent);
});
// 配列にあるインデックス番号のようなキーを作る
console.log(text2);
const keys = Object.keys(text2);
console.log(keys);
keys.forEach((key) => {
  console.log(text2[key].textContent);
});
