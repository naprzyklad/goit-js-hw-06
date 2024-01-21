const inputElement = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");

inputElement.addEventListener("input", () => {
  const inputValue = inputElement.value;

  if (inputValue === "") {
    outputElement.textContent = "Anonymous";
  } else {
    outputElement.textContent = inputValue;
  }
});
