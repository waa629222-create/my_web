const button = document.querySelector("#helloButton");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
  message.textContent = "你好！这是我制作的第一个交互功能。";
});