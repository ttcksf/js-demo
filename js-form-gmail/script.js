const form = document.querySelector('.form');
const fname = document.querySelector('.fname');
const email = document.querySelector('.email');
const tel = document.querySelector('.tel');
const subject = document.querySelector('.subject');
const text = document.querySelector('.text');

function sendEmail() {
  console.log('送信');
}

function checkInput() {
  const inputList = document.querySelectorAll('.input');
  for (const input of inputList) {
    // 初期設定
    if (input.value == '') {
      input.classList.add('error');
      input.parentElement.classList.add('error');
    }

    // 入力時
    input.addEventListener('keyup', () => {
      if (input.value == '') {
        input.classList.add('error');
        input.parentElement.classList.add('error');
      } else {
        input.classList.remove('error');
        input.parentElement.classList.remove('error');
      }
    });
    email.addEventListener('keyup', () => {
      // https://www.javadrive.jp/regex-basic/sample/index13.html
      const emailRgx =
        '^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*.)+[a-zA-Z]{2,}$';
      if (!email.value.match(emailRgx)) {
        email.classList.add('mailErr');
        email.parentElement.classList.add('mailErr');
      } else {
        email.classList.remove('mailErr');
        email.parentElement.classList.remove('mailErr');
      }
    });
  }
}

form.addEventListener('submit', (e) => {
  checkInput();
  e.preventDefault();
  sendEmail();
});
