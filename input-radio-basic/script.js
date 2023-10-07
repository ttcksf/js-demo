const form = document.querySelector("#form");
const langResult = document.querySelector("#langResult");
const hobbitResult = document.querySelector("#hobbitResult");
const liveResult = document.querySelector("#liveResult");

form.addEventListener("change", () => {
  function getRadioValue(name) {
    // ラジオボタンを取得する
    const radios = document.getElementsByName(name);
    // 選択されているラジオボタンを取得する
    for (const radio of radios) {
      if (radio.checked) {
        return radio.value;
      }
    }
  }

  langResult.textContent = getRadioValue("lang");
  hobbitResult.textContent = getRadioValue("hobbit");
  liveResult.textContent = getRadioValue("live");
});
