const fromText = document.querySelector(".fromText");
const toText = document.querySelector(".toText");
const fromLang = document.querySelector(".fromLang");
const toLang = document.querySelector(".toLang");
const btn = document.querySelector(".btn");

// 複数のアイコンを一括で取得する
const icons = document.querySelectorAll(".icons");
let fromLangVal = "ja-JP";
let toLangVal = "en-US";

fromLang.addEventListener("change", () => {
  fromLangVal = fromLang.value;
});
toLang.addEventListener("change", () => {
  toLangVal = toLang.value;
});

// 翻訳の精度は無料レベル
// https://mymemory.translated.net/doc/spec.php
btn.addEventListener("click", () => {
  let sentence = fromText.value;
  // console.log(sentence);
  // console.log(fromLangVal);
  // console.log(toLangVal);
  if (!sentence) return;
  fetch(
    `https://api.mymemory.translated.net/get?q=${sentence}&langpair=${fromLangVal}|${toLangVal}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return (toText.value = data.responseData.translatedText);
    });
});

icons.forEach((icon) => {
  icon.addEventListener("click", (data) => {
    // console.log(data);
    // console.log(data.target);

    let voice;
    if (data.target.id === "fromAudio") {
      voice = new SpeechSynthesisUtterance(fromText.value);
      // 発音（聞こえづらい）
      // voice.lang = fromLangVal;
    }
    if (data.target.id === "toAudio") {
      voice = new SpeechSynthesisUtterance(toText.value);
      // 発音（聞こえづらい）
      // voice.lang = toLangVal;
    }
    if (data.target.id === "fromCopy") {
      navigator.clipboard.writeText(fromText.value);
    }
    if (data.target.id === "toCopy") {
      navigator.clipboard.writeText(toText.value);
    }
    // console.log(voice);
    speechSynthesis.speak(voice);
  });
});
