// タブメニューの要素を取得
const tabElements = document.querySelectorAll(".tab");
const contentElements = document.querySelectorAll(".content");

// タブをクリックしたときにイベントを発生させる
for (const tabElement of tabElements) {
  tabElement.addEventListener("click", () => {
    // クリックしたタブのクラスを「current」に設定する
    tabElement.classList.add("current");

    // クリックしたタブに対応するコンテンツのクラスを「current」に設定する
    const contentElement = contentElements.querySelector(
      `[data-tab="${tabElement.dataset.tab}"]`
    );
    contentElement.classList.add("current");

    // 他のタブのクラスを「current」から削除する
    for (const otherTabElement of tabElements) {
      if (otherTabElement !== tabElement) {
        otherTabElement.classList.remove("current");
      }
    }
  });
}
