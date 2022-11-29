const text = "text";

//0 "" "text" null

//!では０がfalseになってしまう
// === nullが良いが空文字が「0文字の文字」になってtrueになってしまう
// === ""が「0文字の文字」としてざっくり問題ないが、今度はnullがtrueになってしまう
// if(text === ""){
//   console.log("NG");
// }else{
//   console.log("OK");
// }

if(text === "" || text === null){
  console.log("NG");
}else{
  console.log("OK");
}

