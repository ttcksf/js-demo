// idや日付、小数点など数字の桁数を揃えるメソッド

// 先頭に0を足して桁数を揃えたい
let id = "1";
// 全体の桁数、足りない時の文字
// id = id.padStart(5, 0);
// 記号や文字のときは文字列にするのを注意
id = id.padStart(8, "*");
// 文字列に対するメソッドなので数字は一度文字列に変換するのも注意
// let id = 1;
// id = id.toString().padStart(5, 0);
console.log(id);

// 日付の桁数を揃えたい時
let year = "2023";
// let month = "11";
let month = "1";
// console.log(`${year}年${month}月`);
console.log(`${year}年${month.padStart(2, 0)}月`);

// 小数点の桁数を揃えたい時
// let float = 12.34;
let float = 11.3;
console.log(float.toString().padEnd(5, 0));
// 小数点の場合は「.」も1桁に数えるのを注意
// console.log(float.toString().padEnd(4, 0));
