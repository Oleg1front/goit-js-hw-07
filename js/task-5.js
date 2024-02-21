function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const pageBody = document.querySelector("body");
const colorOutput = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
  pageBody.style.backgroundColor = getRandomHexColor();
  colorOutput.textContent = pageBody.style.backgroundColor;
});
