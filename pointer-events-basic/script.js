// ポインターはマウスとタッチをカバー
const container = document.querySelector('.container');
const progress = document.querySelector('.progress');

// 押したとき
// container.addEventListener('pointerdown', (e) => {
// container.addEventListener('pointermove', (e) => {
// 離したとき
container.addEventListener('pointerup', (e) => {
  // pointerType：種類
  // pressure: ペン
  // pointerId：複数回、2本タッチの判別に利用
  // width,height: サイズ
  // pageX,pageY：座標
  // console.log(e);
  // const point = document.createElement('div');
  // document.body.appendChild(point);
  // point.id = e.pointerId;
  // point.style.top = `${e.pageX}px`;
  // point.style.left = `${e.pageY}px`;
});
// クリックとドラッグの両方でゲージを動かす
progress.addEventListener('pointerdown', (e) => {
  progress.setPointerCapture(e.pointerId);
  positionFn(e);
  progress.addEventListener('pointermove', positionFn);
  progress.addEventListener(
    'pointerup',
    () => {
      progress.removeEventListener('pointermove', positionFn);
    },
    { once: true }
  );
});

function positionFn(e) {
  const rect = e.target.getBoundingClientRect();
  // 今いるゲージの位置
  // console.log(e.clientX);
  // ゲージの横幅
  // console.log(rect.width);
  // CSSの変数に代入する
  progress.style.setProperty(
    '--position',
    `${(e.clientX / rect.width) * 100}%`
  );
}
