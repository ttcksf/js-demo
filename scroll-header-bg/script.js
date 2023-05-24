const header = document.querySelector(".header");
const scrollPosition = document.querySelector(".scroll");

// IntersectionObserverで位置情報を取れて、インスタンス化で座標が０にリセットされる
const obs = new IntersectionObserver(
  (entries) => {
    // entriesには監視対象が配列で格納されており0番目にするとscrollPositionのことになる。またisIntersectingでビューポートと交差しているかを真偽値で判定
    header.classList.toggle("sticky", !entries[0].isIntersecting);
  },
  { rootMargin: "1000px 0px 0px 0px" }
  // rootMarginでビューポートの地点をずらせる
);
// observeで監視を開始する
obs.observe(scrollPosition);
