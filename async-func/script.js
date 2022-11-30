//deferもしくはscriptタグを下部に書かないとエラーになる
//上から順番に実行していくのが原因。今回はbuttonを見つける前にコードをJSを実行するのが問題なので、内容によっては大丈夫な時もある
const button = document.querySelector("button");
button.style.backgroundColor = "green";
