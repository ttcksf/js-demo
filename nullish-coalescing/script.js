function handleNumber(num1, num2) {
  //左辺がtrueの時は左辺を返し、それ以外は右辺を返す。０はfalseに注意
  // number = num || "エラーです";

  //左辺がnull,undifinedの時は右辺を返し、それ以外は左辺を返す
  // number = num ?? "エラーです";

  //全てがtrueの時と左辺がtrueの時に右辺を返す。
  number = num1 > 0 && num2 > 0;

  console.log(number);
}

handleNumber(10, 2);
