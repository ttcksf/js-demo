// ①forループからforEach,mapへ
const arr = ["aaa", "bbb", "ccc"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((c) => {
//   console.log(c);
// });
// forEach,mapはここまで短縮できる
arr.forEach((c) => console.log(c));

// ②関数宣言からアロー関数へ移行してthisを考えなくなる
// thisのような汎用的な単語は使い回しできるので便利だが初心者がやると間違えやすいため
const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   console.log(this);
// });
btn.addEventListener("click", (e) => {
  // アロー関数ではwindowを指すのでthisを使う意味がない
  // console.log(this);
  // 明示的に指定する
  // console.log(btn);
  // もしくはe.targetにする
  console.log(e.target);
});

// ③配列の要素、オブジェクトのプロパティの有無をif文で書かずにオプショナルチェーンでやるようになった
const obj = {
  id: 1,
  // name: "Tanaka",
  age: 20,
};
if (obj.name) {
  console.log(obj.name);
}
console.log(obj?.name);
