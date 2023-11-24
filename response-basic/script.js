// レスポンスの形
// new Response(body, {
//   status: 200,
//   statusText: "success",
//   headers: {
//     "Content-Type": "application/json",
//     "Content-Length": 100,
//   },
// });

// データを送るときはオブジェクト→JSON→ファイルにしている想定
const obj = {
  id: "0001",
  name: "aaa",
  age: 20,
};
// console.log(obj);
const json = JSON.stringify(obj);
// console.log(json);
const file = new File([json], "test.json", { type: "application/json" });
// console.log(file);
window.addEventListener("DOMContentLoaded", resFn);

// 送られたファイル→JSON→オブジェクトにして取得する
// Responseの第一引数にファイルを指定、第二引数にオプション情報を指定
async function resFn() {
  const response = new Response(file, {
    status: 200,
    statusText: "success",
    headers: {
      "Content-Type": file.type,
      "Content-Length": file.size,
    },
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
}

// HTMLのファイル添付で取得した画像をファイル→Blobにして取得する
const input = document.querySelector(".input");
input.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  const response = new Response(file, {
    status: 200,
    statusText: "success",
    headers: {
      "Content-Type": file.type,
      "Content-Length": file.size,
    },
  });
  console.log(response);
  const data = await response.blob();
  console.log(data);
  // Blobにして取得できたらURLに変換してプレビューなどの機能に使用できるようになる
  const url = URL.createObjectURL(data);
  console.log(url);
  const preview = document.querySelector(".preview");
  preview.href = url;
});
