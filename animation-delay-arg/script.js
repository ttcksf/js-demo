const dotList = document.querySelectorAll(".dot");
// dotList.forEach((dot) => {
//   dot.classList.toggle("active");
// });
for (let i = 0; i < dotList.length; i++) {
  const index = i + 1;
  // console.log(index);
  dotList[i].style.animationDelay = `0.${index}s`;
  dotList[i].classList.toggle("active");
}
