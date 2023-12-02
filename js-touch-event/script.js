document.addEventListener('touchstart', (e) => {
  // console.log(e);
  console.log('start');

  [...e.changedTouches].forEach((touch) => {
    const div = document.createElement('div');
    div.classList.add('touched');
    // タッチ面に接触した点を識別する固有の値を返す。
    // div.id = touch.identifier;
    // document.body.append(div);
  });
});
document.addEventListener('touchmove', (e) => {
  console.log('move');
  // [...e.changedTouches].forEach((touch) => {
  //   const dot = document.getElementById(touch.identifier);
  //   console.log(dot);
  // });
});
document.addEventListener('touchend', (e) => {
  console.log('end');
  // [...e.changedTouches].forEach((touch) => {
  //   const dot = document.getElementById(touch.identifier);
  //   dot.remove();
  // });
});
// touchイベントはマウスクリックにも反応する
