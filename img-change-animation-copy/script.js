const itemList = document.querySelectorAll('.item');
for (let i = 0; i < itemList.length; i++) {
  const index = i * 2;
  // console.log(index);
  itemList[i].style.animationDelay = `${index}s`;
  itemList[i].classList.toggle('active');
}
