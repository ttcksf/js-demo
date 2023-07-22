const container = document.querySelector(".container");
const qr = document.querySelector(".qr");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const qrCode = document.querySelector(".qrCode");

btn.addEventListener("click", () => {
  let url = input.value;
  if (!url) return;
  console.log(url);
  btn.innerText = "読み込み中";

  // https://goqr.me/api/
  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;

  // QRコードが読み込まれた時にactiveを付与する
  qrCode.addEventListener("load", () => {
    qr.classList.add("active");
    btn.innerText = "QR生成";
  });
  // qr.classList.add("active");
});
