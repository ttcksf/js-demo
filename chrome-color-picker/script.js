const btn = document.querySelector('.btn');
// const colorsArr = [];
const colorsArr = JSON.parse(localStorage.getItem('colorsArr') || '[]');
const ul = document.querySelector('ul');
const clear = document.querySelector('.clear');

const showColors = () => {
  if (colorsArr.length === 0) return;
  // const li = colorsArr
  ul.innerHTML = colorsArr
    .map((color) => {
      return `
      <li class="color">
        <span class="rect" style="background: ${color}"></span>
        <span class="value">${color}</span>
      </li>
      `;
    })
    .join('');
  // console.log(li);
};
// 開発時はローカルを手動で削除しておく
// 通常表示とcolorDropping内のクリックイベントの両方で発動する
showColors();

const colorDropping = async () => {
  try {
    const dropper = new EyeDropper();
    // const res = await dropper.open();
    // 分割代入で取り出す
    const { sRGBHex } = await dropper.open();
    // console.log(res);
    navigator.clipboard.writeText(sRGBHex);

    // colorsArr.push(sRGBHex);
    // console.log(colorsArr);
    // localStorage.setItem('colorsArr', JSON.stringify(colorsArr));
    // showColors();

    // 二重登録の防止
    if (!colorsArr.includes(sRGBHex)) {
      colorsArr.push(sRGBHex);
      localStorage.setItem('colorsArr', JSON.stringify(colorsArr));
      showColors();
    }
  } catch (error) {
    console.log(error);
  }

  document.querySelectorAll('.color').forEach((val) => {
    val.addEventListener('click', (e) => {
      // console.log('クリックした対象：', val);
      copyColor(
        e.currentTarget.firstElementChild,
        e.currentTarget.lastElementChild
      );
    });
  });
};

const copyColor = (rect, value) => {
  console.log('取得結果：', rect, value);
  let copied = value.innerHTML;
  navigator.clipboard.writeText(copied);
  // console.log(copied);
  value.innerHTML = 'Copied';
  setTimeout(() => {
    value.innerHTML = copied;
  }, 1000);
};

const clearColors = () => {
  // ローカルストレージの値を空の配列にする
  colorsArr.length = 0;
  localStorage.setItem('colorsArr', JSON.stringify(colorsArr));
  // 表示を削除する
  ul.innerHTML = '';
};

clear.addEventListener('click', clearColors);
btn.addEventListener('click', colorDropping);
