const arr = ["a", "a", "b", "a", "a", "a"];
let data;
for (let i = 0; i < arr.length; i++) {
  console.count(arr[i]);
  if (arr[i] === "b") {
    data = "bを見つけた！";
    // breakは見つけた時にループを終了させる。
    // breakを使わない場合は総当たりして終わる
    // break;
  }
}

const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
container.textContent = data;
// wrapper.textContent = "bbb";
