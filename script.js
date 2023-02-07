const saveBtn = document.querySelector("#saveBtn");
const backBtn = document.querySelector("#backBtn");
const cookieResult = document.querySelector("#cookieResult");

saveBtn.addEventListener("click", () => {
  document.cookie = "id=0001";
  document.cookie = "device=pc";
  document.cookie = `name=${encodeURIComponent("田中")}`;
  console.log(document.cookie);
});

backBtn.addEventListener("click", () => {
  const result = converter(document.cookie);
  console.log(result);
});

function converter(cookie) {
  cookie = cookie.split(";");
  const obj = {};
  // console.log(cookie);

  cookie.map((item) => {
    const elem = item.split("=");
    const key = elem[0];
    const val = decodeURIComponent(elem[1]);
    obj[key] = val;
  });
  return obj;
}

// 日本語はエンコードとデコードする必要がある
// キーとバリューの対にして管理する
// 設定できるのは文字列
// localStorageと違ってクッキーはサーバーサイドとも共有できる
