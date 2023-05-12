// 実行する関数が一つの場合はそのまま書いてOK
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// {}は2つ以上の関数を実行することを想定しているためreturnで戻り値を指定する必要がある

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    response.json();
  })
  .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => console.log(json));
