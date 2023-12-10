const boxes = document.querySelectorAll('.box');
// console.log(boxes);

window.addEventListener('scroll', () => {
  const line = 400;

  // const box1 = document.querySelector('.box1');
  // const top1 = box1.getBoundingClientRect().top;
  // console.log(top1);

  boxes.forEach((box) => {
    const top = box.getBoundingClientRect().top;

    if (top < line) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
});
