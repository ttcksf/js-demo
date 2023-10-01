const articles = document.querySelectorAll(".news");
// console.log(articles);

articles.forEach((article) => {
  // console.log(article);
  // console.dir(article);
  // console.log(article.dataset);
  // console.log(article.dataset.date);
  if (article.dataset.date === "20230101") {
    article.classList.add("show");
  }
});

// textContentやe.target.valueなど値を取得する方法の一つ
