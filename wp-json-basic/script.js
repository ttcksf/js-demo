const main = () => {
  (() => {
    let mainRoot = document.querySelector('#main');
    fetch('https://lorem-co-ltd.com/wp-json/wp/v2/posts?_embed&per_page=3')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`リクエスト失敗： ${res.status}`);
      })
      .then((data) => {
        console.log(data);
        data.forEach((item) => {
          const date = new Date(item.date);
          const y = date.getFullYear();
          const m = date.getMonth() + 1;
          const d = date.getDate();

          let html = `<div class="post"><a href="${item.link}">${y}/${m}/${d}<br>${item.title.rendered}</a></div><hr>`;
          mainRoot.innerHTML += html;
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  })();
};
window.addEventListener('DOMContentLoaded', main);
