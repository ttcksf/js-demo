const todos = document.querySelectorAll(".todo");
console.log(todos);
const newTodos = Array.from(todos);
console.log(newTodos);
newTodos.map((todo) => {
  console.log(todo);
});
// NodeListはDOMの集まりで、classList,appendChildなどHTMLを操作するためのもの
// 配列はデータの集まりで、mapやfindなどで主に計算系をするためのもの
// それぞれで使えるメソッドはプロトタイプを見れば確認できるので覚える必要はない
// ちなみにdocumentはNodeListではないが同じメソッドを継承しているのでquerySelectorなどが使えたりする
