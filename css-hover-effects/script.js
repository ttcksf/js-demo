const btn = document.querySelector("#btn");
const modalBtn = document.querySelector("#modalBtn");
const dialog = document.querySelector("#dialog");

btn.addEventListener("click", () => {
  dialog.showModal();
});

modalBtn.addEventListener("click", () => {
  dialog.close();
});

// モーダルの外をクリックしても閉じるようにする
dialog.addEventListener("click", (e) => {
  // 要素の寸法と画面上の相対位置を取得
  const dialogPosition = dialog.getBoundingClientRect();
  console.log(dialogPosition);
  // イベント（クリック）が発生した時点の画面上の相対位置
  console.log("X: ", e.clientX);
  console.log("Y: ", e.clientY);
  if (
    e.clientX < dialogPosition.left ||
    e.clientX > dialogPosition.right ||
    e.clientY < dialogPosition.top ||
    e.clientY > dialogPosition.bottom
  ) {
    dialog.close();
  }
});
