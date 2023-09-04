// 数字の書式を変えたい場合はletにするのを注意
let num = 15.123;
// let num = -15.123;
// 四捨五入
num1 = Math.round(num);
// 切り捨て
num2 = Math.floor(num);
// 切り上げ
num3 = Math.ceil(num);
// 絶対値（0からの距離,マイナスでも変わらないもの）
num4 = Math.abs(num);
// 円周率(3など別の値にしたいときは自分で変数などで作る必要がある)
num5 = Math.PI;
console.log(num5);

console.log(4 / 2);
// 小数点に誤差を入れてしまうので自分で宣言できる値、APIからの値など全てに必要
console.log(100 * 1.1);
