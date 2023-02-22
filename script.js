const array = ["aaa", "bbb", "ccc"];
const obj = {
  id: "0001",
  name: "test",
  age: 20,
};

// 繰り返す回数を自分で条件を作って決めることができる
// for (let i = 0; i == 0; i++) {
//   console.log(array[i]);
// }

// インデックス番号を使用して配列の中を全て見ていく
// オブジェクトにも使える
// for (let i in array) {
//   console.log(array[i]);
// }
// for (let key in obj) {
//   console.log(`${key},${obj[key]}`);
// }

// 要素を使って配列の中を全て見ていく(インデックス番号が不要な時)
// オブジェクトには使えない
// for (let item of array) {
//   console.log(item);
// }
// for (let key of obj) {
//   console.log(`${key},${obj[key]}`);
// }

// 要素でもインデックス番号でもOK
// 繰り返す回数を自分で条件を決められる
// オブジェクトには使えない
array.forEach((item) => {
  console.log(item);
});
array.forEach((item, i) => {
  console.log(`${item}, ${i}`);
});
array.forEach((item, i) => {
  if (i < 1) {
    console.log(item);
  }
});
obj.forEach((item, i) => {
  if (i < 1) {
    console.log(item);
  }
});
