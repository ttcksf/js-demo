const articles = [
  {
    title: "aaa",
    cat: "html",
  },
  {
    title: "bbb",
    cat: "css",
  },
  {
    title: "ccc",
    cat: "html",
  },
  {
    title: "ddd",
    cat: "js",
  },
];

// filterは条件に一致する（true）のものを配列にして返す
const htmlArticles = articles.filter((article) => {
  return article.cat === "html";
});
console.log(htmlArticles);

// findは条件に一致する（true）最初のものを返す(複数あっても1個しか返さない)ß
const htmlArticle = articles.find((article) => {
  return article.cat === "html";
});
console.log(htmlArticle);

// someは条件に一致するかをbooleanで返す(どれかまでは返さない)
const htmlFlag = articles.some((article) => {
  return article.cat === "html";
});
console.log("some:", htmlFlag);

// includesはオブジェクトには使えない
// const result = articles.includes({title:"aaa",cat:"html"});
// 数字、文字列に使用する
const arr = ["html", "css", "js"];
const result = arr.includes("html");
console.log("includes:", result);

// everyは配列の中の全ての要素が条件に一致するかをbooleanで返す
const htmlFlags = articles.every((article) => {
  return article.cat === "html";
});
console.log("every:", htmlFlags);

// mapは処理結果を配列にして返す
const titleList = articles.map((article) => {
  return article.title;
});
console.log(titleList);

// forEachは処理を繰り返し実行する（配列にして返す部分は自分で作る必要がある）
const titles = articles.forEach((article) => {
  console.log(article.title);
});

// reduceは要素同士を合体させる(任意で第二引数にaccの初期値)
const counts = articles.reduce((acc, article) => {
  const cat = article.cat;
  if (acc[cat] === undefined) {
    acc[cat] = 1;
  } else {
    acc[cat]++;
  }
  return acc;
}, {});
console.log(counts);
