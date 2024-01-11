const btn = document.querySelector('.btn');
const ul = document.querySelector('ul');
const clear = document.querySelector('.clear');
const colorsArr = JSON.parse(localStorage.getItem('colorsArr') || '[]');

const showColor = () => {
  if (colorsArr.length === 0) return;
  // const li = colorsArr;
  ul.innerHTML = colorsArr
    .map((color) => {
      return `<li class="color">
       <span class="rect" style="background: ${color};"></span>
       <span class="value">${color}</span>
    </li>`;
    })
    .join('');

  document.querySelectorAll('.color').forEach((val) => {
    val.addEventListener('click', (e) => {
      copyColor(
        e.currentTarget.firstElementChild,
        e.currentTarget.lastElementChild
      );
    });
  });
};
showColor();

const colorDrop = async () => {
  try {
    const dropper = new EyeDropper();
    // カラーを拾う
    const { sRGBHex } = await dropper.open();
    // コピペ
    navigator.clipboard.writeText(sRGBHex);

    console.log(sRGBHex, colorsArr);

    // 二重登録の防止
    if (!colorsArr.includes(sRGBHex)) {
      // 配列に保存
      colorsArr.push(sRGBHex);
      // 配列自体をローカルストレージに入れる(カラーコードは文字列にする)
      localStorage.setItem('colorsArr', JSON.stringify(colorsArr));
      showColor();
    }
  } catch (error) {
    console.log(error);
  }
};

const copyColor = (rect, value) => {
  let copied = value.innerHTML;
  navigator.clipboard.writeText(copied);
  value.innerHTML = 'Copied';
  setTimeout(() => {
    value.innerHTML = copied;
  }, 1000);
};

const clearColor = () => {
  // 配列の初期化
  colorsArr.length = 0;
  // ローカルストレージの初期化(空の配列を上書きで挿入する)
  localStorage.setItem('colorsArr', JSON.stringify(colorsArr));
  document.querySelectorAll('.color').forEach((list) => {
    list.classList.add('hidden');
  });
  ul.innerHTML = '';
};
clear.addEventListener('click', clearColor);
btn.addEventListener('click', colorDrop);
