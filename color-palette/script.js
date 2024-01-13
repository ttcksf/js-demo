const container = document.querySelector('.container');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const palette = document.querySelector('.palette');

const setDefaultColor = () => {
  const defaultColor = input.value;
  // console.log(defaultColor);
  document.body.style.backgroundColor = defaultColor;
  const colors = generatePalettes(defaultColor);
  const div = document.createElement('div');
  div.classList.add('box');
  div.style.backgroundColor = defaultColor;
  palette.appendChild(div);

  colors.forEach((color) => {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.backgroundColor = color;
    palette.appendChild(div);
  });
};

function copyCode(e) {
  let code = e.target.style.backgroundColor;
  let rgb = code.replace(/[rgb()]+/g, '') || rgb;
  rgb = rgb.split(',');
  let result = '#';
  rgb.forEach((val) => {
    val = parseInt(val).toString(16);
    // 1桁のものと2桁のものがある
    // console.log(val.length);
    result += val.length == 1 ? `0${val}` : `${val}`;
    return result;
  });
  navigator.clipboard.writeText(result);
}

function generatePalettes(color) {
  const baseHue = generateHue(color);
  const colorsArr = [];
  for (let i = 0; i < 5; i++) {
    const hue = (baseHue + (360 / 5) * i) % 360;
    const color = `hsl(${hue}, 70%, 50%)`;
    colorsArr.push(color);
  }
  return colorsArr;
}
function generateHue(color) {
  // #000000→000000
  const hex = color.slice(1);
  // アルファベット表記を数字に変換
  const rgb = parseInt(hex, 16);

  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 16) & 0xff;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let hue;
  const d = max - min;
  // #000000,#333333,#222222などの時
  if (max === min) return (hue = 0);
  // モノクロ以外
  if (max !== min) {
    switch (max) {
      case r:
        hue = ((g - b) / d + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        hue = ((b - r) / d + 2) * 60;
        break;
      case b:
        hue = ((r - g) / d + 4) * 60;
        break;
    }
    return hue;
  }
}

window.addEventListener('load', () => {
  palette.innerHTML = '';
  setDefaultColor();
});
btn.addEventListener('click', () => {
  palette.innerHTML = '';
  setDefaultColor();
  const divColors = document.querySelectorAll('.box');
  console.log(divColors);
  divColors.forEach((div) => {
    div.addEventListener('click', copyCode);
  });
});
