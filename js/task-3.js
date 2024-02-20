const textInput = document.querySelector("#name-input");
const defaultInput = document.querySelector("#name-output");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const trimmedInput = (textOutput.textContent =
    event.currentTarget.value.trim());
  if (trimmedInput !== "") {
    textOutput.textContent = trimmedInput;
  } else {
    textOutput.textContent = "Anonymous";
  }
});
