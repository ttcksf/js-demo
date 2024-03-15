const form = document.querySelector('.form');
const fname = document.querySelector('.fname');
const email = document.querySelector('.email');
const tel = document.querySelector('.tel');
const subject = document.querySelector('.subject');
const text = document.querySelector('.text');

function sendEmail() {
  // console.log('送信');
  const bodyMsg = `
    お名前：${fname.value}<br>
    メールアドレス：${email.value}<br>
    電話番号：${tel.value}<br>
    件名：${subject.value}<br>
    内容：${text.value}
  `;
  Email.send({
    SecureToken: '01b2bd5f-ed12-49bf-a55b-23b6c7f6bcd4',
    To: 'ttc0104ksf1993@gmail.com',
    From: 'ttc0104ksf1993@gmail.com',
    // Subject: 'テスト送信',
    Subject: subject.value,
    // Body: 'こちらはテストメールです',
    Body: bodyMsg,
  }).then((message) => alert(message));
}
// setup an smtp server hereをクリックして右上のログインボタンからログイン
// アンケートは一番上を回答して終了する
// settings→create SMTPでGmailアドレスを入力してcreateボタンをクリック
// hostとusernameとpasswordをポップアップの内容に差し替えてポップアップを閉じる
// settings→manage domains→Email verification→Start verification
// I don’t own a domain→verify email→アドレスを入力→メール検証をクリアしてリロード
// Email verificationでメールアドレスがverifiedになる

// Encrypt your smtp credentialsをクリックして、UserNameとPasswordをコピペして、GenerateToken
// 表示されたトークンをSecureTokenの値にコピペ
// ↑からHostとUsernameとPasswordを削除する

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
  // e.preventDefault();
  // sendEmail();
  if (form.querySelectorAll('.error').length === 0) {
    e.preventDefault();
    sendEmail();
  }
});
