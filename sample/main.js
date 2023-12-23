const div = document.createElement('div');
div.style.width = '150px';
div.style.height = '150px';
div.style.padding = '8px';
div.style.backgroundColor = '#fff';
div.style.boxShadow = '-2px -2px 16px #ccc';
div.style.position = 'fixed';
div.style.bottom = '0';
div.style.right = '0';
div.style.fontSize = '13px';
div.innerHTML = `
<div id="copyRangeHashTag">
    <button id="copyBtnTwitterTemp">
      Copy
    </button>
    <pre>
    
    #webデザイナー
    #web制作
    #駆け出しエンジニア
    </pre>
</div>
`;

document.body.appendChild(div);
const copyBtnTwitterTemp = document.querySelector('#copyBtnTwitterTemp');
copyBtnTwitterTemp.addEventListener('click', () => {
  const copyRange = document.querySelector('#copyRangeHashTag > pre');
  navigator.clipboard.writeText(copyRange.textContent);
  copyBtnTwitterTemp.innerHTML = 'Copied';
  setTimeout(() => {
    copyBtnTwitterTemp.innerHTML = 'Copy';
  }, 1000);
});
