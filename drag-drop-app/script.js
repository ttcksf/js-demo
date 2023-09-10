const todoList = document.querySelector(".todoList");
const todos = document.querySelectorAll(".todo");
// console.log(todos);

todos.forEach((todo) => {
  todo.addEventListener("dragstart", () => {
    todo.classList.add("drag");
  });
  todo.addEventListener("dragend", () => {
    todo.classList.remove("drag");
  });
});

todoList.addEventListener("dragover", (e) => {
  e.preventDefault();
  // ドラッグ中の要素を取得
  const dragTodo = document.querySelector(".drag");
  // class="drag"以外のtodoを集める（この時点では配列ではなくNodeList）
  let anotherList = [...document.querySelectorAll(".todo:not(.drag)")];
  // console.log(anotherList);

  let dropped = anotherList.find((another) => {
    // e.clientYプロパティは、マウスカーソルの現在のY座標
    return e.clientY <= another.offsetTop + another.offsetHeight / 2;
  });
  // console.log(dropped);
  // ドラッグ中の要素（dragTodo）が、条件に一致した要素（dropped）の前に挿入
  todoList.insertBefore(dragTodo, dropped);
});
