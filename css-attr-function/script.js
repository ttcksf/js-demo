const articles = document.querySelectorAll(".news");

let maxNumber = [...articles].map((article) => Number(article.dataset.number));

maxNumber = Math.max.apply(null, maxNumber);
console.log(maxNumber);

articles.forEach((article) => {
  if (article.dataset.number == maxNumber) {
    article.classList.add("show");
  }
});
