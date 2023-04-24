const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let convert = new SpeechSynthesisUtterance(input.value);
  // 音声の速度を０〜２で設定
  convert.pitch = 0.1;
  // 音声の大きさを０〜１で設定
  convert.volume = 0.5;
  speechSynthesis.speak(convert);
});
