// returnは必須ではない;
// 返すものがないとundefinedになる(エラーではない);
// 返すものがないプログラムでは書かない

function sumNum() {
  let a = 10;
  let b = 10;
  // undefinedになる
  // a + b;
  return a + b;
  // returnは必ず最後に書くため後続で書いたものは実行されない
  console.log("hello");
}
console.log(sumNum());

// const id = null;
const id = 10;

// function ifFunc(id) {
//   if (id != null) {
//     if (id < 50) {
//       console.log("50より小さい");
//     } else if (id < 100) {
//       console.log("100より小さい");
//     } else {
//       console.log("101より大きい");
//     }
//   } else {
//     console.log("数字ではありません");
//   }
// }
function ifFunc(id) {
  // ここに当てはまると後続はスキップできる(早期リターン)
  // returnが実行されると後続の処理は実行されない特性を利用している
  if (id != null) {
    return console.log("数字ではありません");
  }
  if (id < 50) {
    console.log("50より小さい");
  } else if (id < 100) {
    console.log("100より小さい");
  } else {
    console.log("101より大きい");
  }
}

ifFunc(id);
