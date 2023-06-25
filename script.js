let result = "";

// 配列とオブジェクトは中身がなかったとしてもエラーにならない（止まらない）
const obj = {
  id: "0001",
  name: "taro",
  age: 20,
};

let arr = [1, 2, 3];

// エラーを自分で作る
if (obj.age) {
  result = obj.age;
} else {
  result = "error";
}

if (arr[2]) {
  result = arr[2];
} else {
  result = "error";
}

// let age = 20;
result = age;

document.body.innerHTML = result;
console.log(result);
