let arr1 = [1, 2, 3, [4, 5, 6]];

// let arr2 = arr1;
// let arr2 = [...arr1];
let arr2 = copyArray(arr1);

arr2[0] = 4;
arr2[3][0] = 5;

function copyArray(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    // インデックス番号ごとに代入するが、中に配列があるとダメ
    // copy[i] = arr[i];

    // 値が配列の時
    if (Array.isArray(arr[i])) {
      copy[i] = copyArray(arr[i]);
    } else {
      copy[i] = arr[i];
    }
  }
  return copy;
}
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
container.textContent = JSON.stringify(arr1);
wrapper.textContent = JSON.stringify(arr2);
