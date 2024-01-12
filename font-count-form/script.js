const input = document.querySelector('.input');
const count = document.querySelector('.count');

maxLength = 30;
input.addEventListener('input', () => {
  let text = input.value.length;
  console.log(text);
  if (text <= 30) {
    count.textContent = maxLength - text;
    count.style.background = '#333';
  } else {
    count.style.background = '#D24545';
  }
});
