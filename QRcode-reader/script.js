const container = document.querySelector(".container");
const form = document.querySelector(".form");
const upload = document.querySelector(".upload");
const input = document.querySelector(".input");
const textarea = document.querySelector(".textarea");
const qrCode = document.querySelector(".qrCode");
const btnCopy = document.querySelector(".btnCopy");
const uploadText = document.querySelector(".uploadText");

// https://goqr.me/api/doc/read-qr-code/
function fetchRequest(formData, file) {
  uploadText.textContent = "画像を解析しています";

  // formタグにURL指定してactionに書くのと同じ
  fetch("http://api.qrserver.com/v1/read-qr-code/", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      data = data[0].symbol[0].data;
      // console.log(data);
      // QRコード以外の画像の条件分岐
      if (!data) {
        uploadText.textContent = "こちらの画像は読み込めませんでした";
      } else {
        qrCode.classList.add("active");
        upload.classList.add("active");
        qrCode.src = URL.createObjectURL(file);
        textarea.textContent = data;
      }
    });
}

form.addEventListener("change", (e) => {
  let file = e.target.files[0];
  if (!file) return;
  // console.log(e.target);
  // console.log(e.target.files);
  // console.log(file);

  // FormDataはフォーム送信(xmlhttprequest)ができるオブジェクト
  // データを添付するにはappendをつける
  let formData = new FormData();
  formData.append("file", file);
  // fetchRequest(formData);
  fetchRequest(formData, file);
});

// テキストコピー
btnCopy.addEventListener("click", () => {
  let text = textarea.textContent;
  navigator.clipboard.writeText(text);
});

// ここから作る
form.addEventListener("click", () => {
  input.click();
});
