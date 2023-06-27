const loading = document.querySelector(".loading");
window.onload = () => {
  // 2秒後に非表示にする
  setTimeout(function () {
    loading.style.display = "none";
  }, 2000);
};
