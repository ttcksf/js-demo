// window.addEventListener("load", () => {
//   console.log("window");
// });

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("document");
// });

// windowは画面、documentはDOMツリー
// iframeの中でもdocumentがあることがわかる
console.log(window);
console.log(document);

// console.dir(window);
// console.dir(document);

// windowの中にdocumentがあるのでこの書き方でもOK
// console.log(window.document);
