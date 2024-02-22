function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxContainer = document.querySelector("#boxes");

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const createDiv = document.createElement("div");
    const divSize = 30 + i * 10;
    createDiv.style.width = `${divSize}px`;
    createDiv.style.height = `${divSize}px`;
    createDiv.classList.add("box");
    createDiv.style.backgroundColor = getRandomHexColor();
    boxContainer.appendChild(createDiv);
  }
};

const destroyBoxes = () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.remove();
  });
};

createBtn.addEventListener("click", () => {
  destroyBoxes();
  const inputValue = parseInt(input.value);
  if (input.value < 1 || input.value > 100) {
    return (input.value = "");
  } else {
    createBoxes(inputValue);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  input.value = "";
});
