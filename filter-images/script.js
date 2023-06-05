const buttons = document.querySelectorAll(".button");
const contents = document.querySelectorAll(".content");
// console.log(button);
// console.log(content);

const filterContent = (e) => {
  // 今あるactiveを削除
  document.querySelector(".active").classList.remove("active");
  // クリックしたボタンにactiveを追加
  e.target.classList.add("active");
  // クリックしたもの
  // console.log(e.target.dataset);
  contents.forEach((content) => {
    // class="content"の全てにhideを追加して非表示
    content.classList.add("hide");
    // datasetで全てのデータが取れる
    // console.log(content.dataset);

    // クリックしたジャンルからだけhideを削除する
    if (
      content.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      content.classList.remove("hide");
    }
  });
};

buttons.forEach((data) => data.addEventListener("click", filterContent));
