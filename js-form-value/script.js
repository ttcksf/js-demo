// JSでフォームデータを取得して別ページに値を渡す

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // 入力全体をフォームに収集しオブジェクトに格納
  const data = new FormData(form);
  // FormDataに値が保存されているがそのままだと操作できない
  // console.log(data);
  // キーと値のペアのリストをオブジェクトに変換
  const obj = Object.fromEntries(data);
  // console.log(obj);
  // 別のページに渡す場合はデータオブジェクトをJSON形式に変換する必要があることが多い
  const json = JSON.stringify(obj);
  // console.log(json);
  // ローカルストレージにformというキー名でjsonデータを保存
  localStorage.setItem("form", json);
  window.location.href = "confirm.html";
});
