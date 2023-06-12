let arr1 = [1, 2, 3];

// let arr2 = arr1;
// arr2[0] = 4;
// コードが少なく書けてコピー元を保持できる（オブジェクト、連想配列には使えない）
// let arr2 = arr1.with(0, 4);

// let arr2 = arr1.toSpliced(0, 1, 4);
// toSplicedは削除と追加もできる
// 開始位置のインデックス番号、削除する個数、追加もしくは置き換えの値
// let arr2 = arr1.toSpliced(0, 1);
let arr2 = arr1.toSpliced(0, 0, 4);

console.log(arr1);
console.log(arr2);

const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
container.textContent = JSON.stringify(arr1);
wrapper.textContent = JSON.stringify(arr2);
