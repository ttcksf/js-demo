const template = document.querySelector("#template");
const content = template.content.cloneNode(true);
content.querySelector("p").textContent = "あああ";
content.querySelector("h1").style.color = "red";
const el = `<span class="test">テスト</span>`;
content.querySelector("p").insertAdjacentHTML("afterbegin", el);
document.body.appendChild(content);
