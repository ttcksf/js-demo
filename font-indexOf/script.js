const text1 = "私の学籍番号は10番です。";
// インデックス番号で返す
const result1 = text1.indexOf("1");
// 無いものについては-1で返す
// const result2 = text1.indexOf("2");
// 対象の文字で始まるかをbooleanで返す
const result2 = text1.startsWith("私");
// 対象の文字で終わるかをbooleanで返す
const result3 = text1.endsWith("。");
// 正規表現
const re = /[0-9]/;
const result4 = re.test(text1);

const container = document.querySelector(".container");
container.innerHTML = text1;
const wrapper = document.querySelector(".wrapper");
wrapper.innerHTML = result1;
