function handleNumber(num) {
  //左辺と右辺のどちらかがtrueかどうか？
  //左辺がtrueの時は左辺を返し、それ以外は右辺を返す。
  // number = num || "エラーです";

  //左辺がnull,undifinedの時は右辺を返し、それ以外は左辺を返す
  // number = num ?? "エラーです";

  //左辺と右辺の両方の条件が合うとき
  //左辺がtrueの時に右辺を返す
  number = (num = 1) && "1です";

  console.log(number);
}

handleNumber(2);
