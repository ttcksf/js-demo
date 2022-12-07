function ifFunc(number) {
  if (number?.id != null) {
    if (number.id < 50) {
      console.log("50より小さい");
    } else if (number.id < 100) {
      console.log("100より小さい");
    } else {
      console.log("101より大きい");
    }
  } else {
    console.log("数字ではありません");
  }
}

function ifFuncReturn(number) {
  if (number?.id == null) return console.log("数字ではありません");

  // if (number.id < 50) {
  //   console.log("50より小さい");
  // } else if (number.id < 100) {
  //   console.log("100より小さい");
  // } else {
  //   console.log("101より大きい");
  // }

  if (number.id < 50) {
    console.log("50より小さい");
    return;
  }
  if (number.id < 100) {
    console.log("100より小さい");
    return;
  }
  //全てのifに合わなかった時のデフォルトの処理を最後に書いておく
  console.log("101より大きい");
}

const number = {
  id: null,
};

ifFunc(number);
ifFuncReturn(number);
