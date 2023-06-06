let arr1 = [
  1,
  2,
  3,
  {
    id: "0001",
    name: "aaa",
    age: 20,
  },
];

// let arr2 = arr1;
// let arr2 = [...arr1];
let arr2 = copyArray(arr1);

arr2[0] = 4;
arr2[3].age = 24;

// 再帰的な呼び出し
function copyArray(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    // インデックス番号ごとに代入するが、中に配列があるとダメ
    // copy[i] = arr[i];

    // 値が配列か
    if (Array.isArray(arr[i])) {
      // 自分自身をもう一度呼び出してelse文に辿り着かせる
      copy[i] = copyArray(arr[i]);
      // 値がオブジェクトか
    } else if (typeof arr[i] === "object" && arr[i] !== null) {
      // copyObjに移動する
      copy[i] = copyObj(arr[i]);
      // 通常の処理
    } else {
      copy[i] = arr[i];
    }
  }
  return copy;
}

function copyObj(obj) {
  let copy = {};
  for (let key in obj) {
    // 値が配列か
    if (Array.isArray(obj[key])) {
      // copyArrayに移動する
      copy[key] = copyArray(obj[key]);
      // 値がオブジェクトか
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      // 自分自身をもう一度呼び出してelse文に辿り着かせる
      copy[key] = copyObj(obj[key]);
      // 通常の処理
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
}

const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
container.textContent = JSON.stringify(arr1);
wrapper.textContent = JSON.stringify(arr2);
