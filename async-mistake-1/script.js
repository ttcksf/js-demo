let number = 1;
const testPromise = new Promise((resolve, reject) => {
  if (number === 1) {
    resolve("OKです");
  } else {
    reject("NGです");
  }
});
// catchを書き忘れるとPromiseエラーになる
// testPromise.then((res) => console.log(res));
testPromise
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
  });

const fetchData1 = async () => {
  // 必要な場所にawaitがないとpending状態のPromiseオブジェクトが返されることになる
  // const res = fetch("https://jsonplaceholder.typicode.com/todos");
  // const data = res.json();
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
};
// fetchData1();

const fetchData2 = async () => {
  // URLのミスは404エラーになる

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (res.status === 404 || res.status === 500) {
    console.log("無効なURLです");
  } else {
    const data = await res.json();
    console.log(data);
  }
};
fetchData2();
