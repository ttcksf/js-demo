// 同じ名前のセレクタに同じ処理をしたいときはquerySelectorAllで全て取得
// 繰り返し処理で処理の中身を書く
const modalImg = document.querySelectorAll(".modal-img");

modalImg.forEach((item) => {
  item.addEventListener("click", () => {
    // .modal-imgをクリックするごとに.activeを追加、削除を繰り返す
    item.classList.toggle("active");
  });
});
