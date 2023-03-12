const result = document.querySelector("#result");

// for (let i = 0; i < 10; i++) {
//   let el = `<li>${i}</li>`;
//   result.insertAdjacentHTML("beforebegin", el);
// }

// for (let i = 0; i < 10; i++) {
//   let el = `<li>${i}</li>`;
//   result.insertAdjacentHTML("beforebegin", el);
// }

// for (let i = 0; i < 10; i++) {
//   let el = `<li>${i}</li>`;
//   result.insertAdjacentHTML("beforebegin", el);
// }

//書くだけでは無視されて実行されない（テンプレートとして使える、修正も一括反映できる）
function numCount() {
  for (let i = 0; i < 10; i++) {
    let el = `<li>${i}</li>`;
    result.insertAdjacentHTML("beforebegin", el);
  }
}
// function numCount() {
//   for (let i = 0; i < 20; i++) {
//     let el = `<li>${i}</li>`;
//     result.insertAdjacentHTML("beforebegin", el);
//   }
// }

// 中身の値が実行する時によって変わるときは引数を使う（引数が無いとワンパターンなテンプレートでしかない）
// 同じ引数での実行頻度が圧倒的に多い場合は引数に初期値を指定しておけばOK（引数忘れでのクラッシュも防げる）
// function numCount(max) {
//   for (let i = 0; i < max; i++) {
//     let el = `<li>${i}</li>`;
//     result.insertAdjacentHTML("beforebegin", el);
//   }
//   console.log(max);
// }

// function numCount(max = 10) {
//   for (let i = 0; i < max; i++) {
//     let el = `<li>${i}</li>`;
//     result.insertAdjacentHTML("beforebegin", el);
//   }
//   console.log(max);
// }

function numCount(max = 10) {
  let value = 0;
  for (let i = 0; i < max; i++) {
    let el = `<li>${i}</li>`;
    result.insertAdjacentHTML("beforebegin", el);
    value += i;
  }
  console.log(value);
  return value;
}

// numCount(10);
// numCount(20);
// numCount(30);
// numCount();
// alert(numCount);
// 関数の戻り値は関数を実行するか、関数の実行を変数や定数に格納する
// alert(numCount());
// let value = numCount();
// alert(value);
