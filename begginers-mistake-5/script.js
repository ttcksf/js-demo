// 1.対象外の要素もクリックメソッドでクリックさせることができる
const btn = document.querySelector('.btnClick');
const div = document.querySelector('.divClick');
// btn.addEventListener('click', () => {
//   alert('test');
// });
// div.addEventListener('click', () => {
//   btn.click();
// });

// CSSで非表示にしている要素もクリックできるが、DOM生成前は無理
// setTimeout(() => {
//   const div = document.createElement('div');
//   div.classList.add('divClick');
//   div.innerHTML = 'divをクリック';
//   document.body.appendChild(div);
// }, 3000);
btn.addEventListener('click', () => {
  div.click();
});
div.addEventListener('click', () => {
  alert('test');
});

// 2. ctrlキー + Enterキーの組み合わせ
document.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.key === 'Enter') {
    console.log('shift enter');
  }
  if (e.altKey && e.key === 'Enter') {
    console.log('alt enter');
  }
  // MacのCommandはmetaKey
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    console.log('ctrl enter');
  }
});
