// 非同期処理をチェーンするか、まとめて書くかの違い
// 仕様に大きな違いはないがasync/awaitの方が見やすいのと、非同期処理が複数連続する時に特定のエラー処理をどこのthenに書くのか迷う可能性が高くなる

// 存在しないURLを指定しているのでエラーになる
// fetch("https://jsonplaceholder.typicode.com/postsa")
//   .then((res) => {
//     // ステータスが 200かどうか？
//     if (!res.ok) {
//       throw new Error("fetchに失敗しました");
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error("エラーです:", error));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     // returnがないためエラーになる
//     res.json();
//   })
//   .then((data) => {
//     if (data === undefined) {
//       throw new Error("json化に失敗しました");
//     }
//     return console.log(data);
//   })
//   .catch((error) => console.error("エラーです:", error));

async function fetchFunc() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("fetchに失敗しました");
    }

    const data = await res.json();
    if (!data) {
      throw new Error("json化に失敗しました");
    }
    console.log(data);
  } catch (error) {
    console.error("エラーです:", error);
  }
}
fetchFunc();
