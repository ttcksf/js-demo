const value = 100;

// console.log(`%c値は %c${value}`, "color: red; font-weight: bold;", "");

console.log(
  "%cスタイル%cのある%cログ",
  "color: red;",
  "",
  "font-weigh: bold;",
  ""
);

//スタイルを何かしら当てるものに「%c」を先頭につける（スタイルなしでも）
//cssは%cの順番に沿って書く
//cssは複数OK
