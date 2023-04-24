const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let convert = new SpeechSynthesisUtterance(input.value);
  // 速度を１〜２で指定
  // convert.pitch = 2.0;
  // 音量を０〜１で指定
  // convert.volume = 0.5;
  speechSynthesis.speak(convert);
});
