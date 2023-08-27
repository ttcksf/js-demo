const todoList = document.querySelector(".todoList");
const todos = document.querySelectorAll(".todo");

todos.forEach((todo) => {
  // ドラッグし始めた時のイベント
  todo.addEventListener("dragstart", () => {
    // console.log("test");
    todo.classList.add("drag");
  });
  // ドラッグが終わった時のイベント
  todo.addEventListener("dragend", () => {
    todo.classList.remove("drag");
  });
  todo.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".drag");
    const mouseX = e.clientX;

    // マウスの位置が兄弟要素の前にあれば、前に入れ替える
    const before = todo.getBoundingClientRect();
    // console.log(before);
    // console.log(before.left);
    // console.log("mouseX:", mouseX);
    if (mouseX > before.left) {
      todo.insertAdjacentElement("afterend", draggable);
    }
    if (mouseX < before.left) {
      todo.insertAdjacentElement("beforebegin", draggable);
    }
  });
});
