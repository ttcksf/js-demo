// resolveが成功でrejectが失敗
// API取得やDB接続などクライアント側で成功を保証できないもの（非同期）によく使われる
// const promise = new Promise((resolve, reject) => {

// });

// const num = 10;
// const promise = new Promise((resolve, reject) => {
//   if (num > 0) {
//     resolve("OKです");
//   } else {
//     reject("エラーです");
//   }
// });
// console.log(promise);

// チェーンメソッドは複数のタスクを順番に実行できる
// thenもnew Promiseを作成している
// rejectの部分はcatchで対応する
const promise = new Promise((resolve, reject) => {
  // resolve("OKです");
  reject("エラーです");
});

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .then(() => {
//     console.log("完了です");
//   });

promise
  .then((result) => {
    // 成功した時の処理内容はココ
    console.log(result);
  })
  .catch((error) => {
    // 失敗した時の処理内容はココ
    console.log(error);
  });

// 成功でも失敗でも最後にやりたいことはfinallyに書く（DB切断など）
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result);
//   })
//   .finally(() => {
//     console.log("完了です");
//   });

// 純粋なコールバックでも作れるが冗長かつ個人差が出る
// function1(() => {
//   function2(() => {
//     if (!data) {
//       console.log("エラーです");
//     } else {
//       console.log("OKです");
//     }
//   });
// });
