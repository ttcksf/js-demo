// エラーの行数を見る
const inputTime = document.querySelector("#inputTime");
const timeResult = document.querySelector("#timeResult");
inputTime.addEventListener("change", (e) => {
  const value = e.target.value;
  // タイポでエラーになっている例
  // timeResult.innerHTML = values;
  timeResult.innerHTML = value;
});

// 現状は何が入っているかはログを見る
const inputDate = document.querySelector("#inputDate");
const dateResult = document.querySelector("#dateResult");
inputDate.addEventListener("change", (e) => {
  // プロパティではなくオブジェクト全体を取得してしまった例
  // const value = e.target;
  // console.log(value);
  // ちなみに「object HTMLInputElement」というのはHTMLタグという意味でdirでオブジェクトとして見ることができる
  // console.dir(value);
  const value = e.target.value;
  dateResult.innerHTML = value;
});

// 現時点の処理の順番を追う
const inputDateTime = document.querySelector("#inputDateTime");
const dateTimeResult = document.querySelector("#dateTimeResult");
inputDateTime.addEventListener("change", (e) => {
  // 順番が間違っている例
  // コンソールが確認できないためプロパティの指定が合っているかわからない
  // 一度止めて書いたプログラムがどう辿って値が何になるかを確認する
  // 注意点：HTML要素などオブジェクトになっているのは中身を開ける必要がある
  // 注意点：コードが実行した後の値を確認する
  // debugger;
  // dateTimeResult.innerHTML = value;
  // const value = e.target.value;
  // console.log(value);

  const value = e.target.value;
  dateTimeResult.innerHTML = value;
});

const inputWeek = document.querySelector("#inputWeek");
const weekResult = document.querySelector("#weekResult");
inputWeek.addEventListener("change", (e) => {
  const value = e.target.value;
  weekResult.innerHTML = value;
});
