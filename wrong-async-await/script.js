const response = async () => {
  try {
    // 1.awaitがないと先に後続の処理が走ってエラーになる
    // 1.const res = fetch("https://jsonplaceholder.typicode.com/todos");
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    // 1.ここにもawaitを入れないとPromiseオブジェクトのみでデータが取得できない
    // 1.const data = res.json();
    const data = await res.json();
    // 1.console.log(data);
    // 2.
    return data;
  } catch (error) {
    console.error(error);
  }
};
// 1.
// response();
// 2.returnを追加してresponse自体をコンソールで確認する場合
// 2.以下のようにするとPromiseオブジェクトしか返ってこない
// 2.
// console.log(response());
// 2.Promiseオブジェクトまでオブジェクトまで返ってきたことを利用する
response().then((data) => console.log(data));

// 3.Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
// asyncがないのにawaitを書いているというエラー
// 同じ関数の中でしか組み合わせできないためinput.addEventListenerの方にasyncを移動させるとOK
// window.addEventListener("DOMContentLoaded", async() => {
//   const input = document.querySelector(".input");
//   input.addEventListener("change",  (e) => {
//     const file = e.target.files[0];
//     const response = new Response(file, {
//       status: 200,
//       statusText: "success",
//       headers: {
//         "Content-Type": file.type,
//         "Content-Length": file.size,
//       },
//     });
//     const data = await response.blob();
//     console.log(data);
//   });
// });
