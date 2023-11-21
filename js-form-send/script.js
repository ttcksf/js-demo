// JSで入力内容を取得して送信する

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // 入力全体をフォームに収集しオブジェクトに格納
  const data = new FormData(form);
  // FormDataに値が保存されているがそのままだと操作できない
  // console.log(data);
  for (c of data) {
    console.log(c);
    console.log(c[0], c[1]);
  }
  // 擬似的に送信
  fetch("https://httpbin.org/post", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
});
