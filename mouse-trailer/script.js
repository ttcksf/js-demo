const mouse = document.querySelector(".mouse");

window.onmousemove = (e) => {
  // 純粋な座標のみだと左上を起点とする
  const x = e.clientX - mouse.offsetWidth / 2;
  const y = e.clientY - mouse.offsetHeight / 2;
  // console.log(x);
  // console.log(y);

  // mouse.style.transform = `translate(${x}px, ${y}px)`;
  // console.log(mouse.style.transform);

  // JSで@keyframesを設定する
  const mouseMove = {
    transform: `translate(${x}px, ${y}px)`,
  };
  mouse.animate(mouseMove, {
    duration: 1000,
    fill: "forwards",
  });
};
