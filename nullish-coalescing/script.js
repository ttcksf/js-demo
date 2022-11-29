function handleNumber(num){
  //左辺がtrueの時は左辺を返し、それ以外は右辺を返す。０はfalseに注意
  // number = num || "エラーです";

  //左辺がnull,undifinedの時は右辺を返し、それ以外は左辺を返す
  // number = num ?? "エラーです";

  //全てがtrueの時と左辺がtrueの時に右辺を返す。
  number = "条件" && "処理";

  console.log(number);
}

handleNumber("条件１")

