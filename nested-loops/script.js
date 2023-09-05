const arr = [
  ["A1", "B1", "C1"],
  ["A2", "B2", "C2"],
  ["A3", "B3", "C3"],
  ["A4", "B4", "C4"],
  ["A5", "B5", "C5"],
];
// 入れ子の取り方
// console.log(arr[0]);
// console.log(arr[0][0]);
const table = document.querySelector(".table");
// console.log(table);

for (let i = 0; i < table.rows.length; i++) {
  // trを全て取得して配列にする
  // console.log(table.rows);
  // 配列になっているのでtrの数を取得できる
  // console.log(table.rows.length);
  // trの中のセルを取得して配列にする
  // console.log(table.rows[i].cells);
  // 配列になっているので1行当たりのセルの数を取得できる
  // console.log(table.rows[i].cells.length);
  for (let j = 0; j < table.rows[i].cells.length; j++) {
    // let test = table.rows[i].cells[j];
    table.rows[i].cells[j].innerHTML = arr[i][j];
  }
}
