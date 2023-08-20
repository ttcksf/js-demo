let str1 = "Hello World";
// 文字の置き換え
// str1 = str1.replace("H", "h");
// 空白の削除にも使える(先頭と文末の空白削除はtrimを使えばOK)
str1 = str1.replace(" ", "");

// 郵便番号のハイフン削除
let str2 = "454-0011";
str2 = str2.replace("-", "");

// 電話番号のハイフン削除（検索対象が複数あるときはAllでやる）
let str3 = "090-111-2222";
// replaceは最初に一致したのみ
// str3 = str3.replace("-", "");
str3 = str3.replaceAll("-", "");

const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const inner = document.querySelector(".inner");
container.textContent = str1;
wrapper.textContent = str2;
inner.textContent = str3;
