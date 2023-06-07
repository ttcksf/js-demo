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
    // インデックス番号ごとに代入するが、中に配列,オブジェクトがあるとダメ
    // copy[i] = arr[i];
    // [] = [1, 2, 3, [4, 5, 6]]
    // [1] = [1, 2, 3, [4, 5, 6]]
    // [1,2] = [1, 2, 3, [4, 5, 6]]

    // 値が配列か
    if (Array.isArray(arr[i])) {
      console.count(`インデックス番号${i}番目はcopyArrayのif通ったよ`);
      // 自分自身をもう一度呼び出してelse文に辿り着かせる
      copy[i] = copyArray(arr[i]);
      // 値がオブジェクトか
    } else if (typeof arr[i] === "object" && arr[i] !== null) {
      console.count(`インデックス番号${i}番目はcopyArrayのelseif通ったよ`);
      // copyObjに移動する
      copy[i] = copyObj(arr[i]);
      // 通常の処理
    } else {
      console.count(`インデックス番号${i}番目はcopyArrayのelse通ったよ`);
      copy[i] = arr[i];
    }
    console.log(copy);
  }
  return copy;
}

function copyObj(obj) {
  let copy = {};
  for (let key in obj) {
    // 値が配列か
    if (Array.isArray(obj[key])) {
      console.count(`インデックス番号${key}番目はcopyObjのif通ったよ`);
      // copyArrayに移動する
      copy[key] = copyArray(obj[key]);
      // 値がオブジェクトか
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      console.count(`インデックス番号${key}番目はcopyObjのelseif通ったよ`);
      // 自分自身をもう一度呼び出してelse文に辿り着かせる
      copy[key] = copyObj(obj[key]);
      // 通常の処理
    } else {
      console.count(`オブジェクトの${key}はcopyObjのelse通ったよ`);
      copy[key] = obj[key];
    }
  }
  return copy;
}

const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
container.textContent = JSON.stringify(arr1);
wrapper.textContent = JSON.stringify(arr2);
