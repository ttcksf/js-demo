// currencyで通貨の国を選択できる
// const moneyFormatter = new Intl.NumberFormat(undefined, {
//   currency: "JPY",
//   style: "currency",
// });
// const money = moneyFormatter.format(1000);

// notationで単位をつけた省略形にできる
const moneyFormatter = new Intl.NumberFormat(undefined, {
  notation: "compact",
});
const money = moneyFormatter.format(100000000);

// style: "percent"で％に直すことができる
const numberFormatter = new Intl.NumberFormat(undefined, {
  style: "percent",
});
const num = numberFormatter.format(0.8);

const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
container.textContent = JSON.stringify(money);
wrapper.textContent = JSON.stringify(num);
