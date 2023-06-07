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
    // [] = [1, 2, 3, [4, 5, 6]]
    // [1] = [1, 2, 3, [4, 5, 6]]
    // [1,2] = [1, 2, 3, [4, 5, 6]]

    // 値が配列の時
    if (Array.isArray(arr[i])) {
      console.count(`インデックス番号${i}番目はif通ったよ`);
      copy[i] = copyArray(arr[i]);
    } else {
      console.count(`インデックス番号${i}番目はelse通ったよ`);
      copy[i] = arr[i];
    }
    console.log(copy);
  }
  return copy;
}
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
container.textContent = JSON.stringify(arr1);
wrapper.textContent = JSON.stringify(arr2);
