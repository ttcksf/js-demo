const app = {
  pages: [],
  init: function () {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      // メニューをクリックして移動するイベント
      link.addEventListener('click', app.nav);
    });
    // 現在のセッション履歴を操作してリロード時には初期のURL（'/index.html#top'）にする
    history.replaceState({}, 'Top', '#top');
    // ブラウザの矢印を使って移動するイベント
    window.addEventListener('hashchange', app.popState);
  },
  // メニューをクリックした時の処理
  nav: function (e) {
    e.preventDefault();
    // HTML,CSSでページ表示、非表示の変更
    // data-targetを取得
    let currentPage = e.target.getAttribute('data-target');
    document.querySelector('.active').classList.remove('active');
    // data-targetとidを同じ値にしていていた
    document.getElementById(currentPage).classList.add('active');
    console.log('e.target.getAttribute：', currentPage);
    // 最後にブラウザーのセッション履歴に現在のページのハッシュを追加
    history.pushState({}, currentPage, `#${currentPage}`);
  },
  // ブラウザバックした時の処理
  popState: function () {
    console.log(location.hash, 'popState発動');
    let hash = location.hash.replace('#', '');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(hash).classList.add('active');
    console.log('hash：', hash);
  },
};
document.addEventListener('DOMContentLoaded', app.init);
