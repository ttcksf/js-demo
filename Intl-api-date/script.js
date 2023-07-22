// const dateFormatter = new Intl.DateTimeFormat("ja-JP");
// アメリカは表記の順番が逆になる
// const dateFormatter = new Intl.DateTimeFormat("en-US");
// localeはundefinedにしても自動設定される
// const dateFormatter = new Intl.DateTimeFormat(undefined);
// optionで細かい表示方法を指定できる
const dateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: "full" });
const date = dateFormatter.format(new Date());

// const createDate = new Intl.RelativeTimeFormat(undefined);
// optionで数字を使わない表記に変えられる
const createDate = new Intl.RelativeTimeFormat(undefined, {
  numeric: "auto",
});
// const newDate = createDate.format(-1, "month");
// const newDate = createDate.format(1, "day");
const newDate = createDate.format(1, "day");

const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
container.textContent = JSON.stringify(date);
wrapper.textContent = JSON.stringify(newDate);
