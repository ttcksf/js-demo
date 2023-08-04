const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");
const title3 = document.querySelector(".title3");

title1.textContent = title1.textContent.toUpperCase();
title2.textContent = title2.textContent.toLowerCase();
// console.log(title3.textContent);
// console.log(title3.textContent[0]);
// console.log(title3.textContent.slice(1));
title3.textContent =
  title3.textContent[0].toUpperCase() +
  title3.textContent.slice(1).toLowerCase();
