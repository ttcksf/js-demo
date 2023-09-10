const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const submit = document.querySelector(".submit");

// 引数にeを書くことで使用することができるため書き忘れに注意
btn.addEventListener("click", (e) => {
  // クリックや入力などWebページで発生するイベントに関する情報がオブジェクトになっている
  console.log(e);
  console.log(e.clientX);
});

input.addEventListener("input", (e) => {
  console.log(e);
  // targetプロパティの中にあるvalueプロパティに入力された文字がある
  let val = e.target.value;
  console.log(val);
  // イベントの種類によってプロパティの種類が違うため存在しないものを書かないように注意
  // console.log(e.clientX);
});

submit.addEventListener("click", (e) => {
  // e.preventDefault();
  // clickイベントではフォームでエンターキーを押すと送信になる
  // 画面が切り替わるためフォーム画面で何かしたい場合はエンターキーを無効化する必要がある
  console.log("テスト");
});
