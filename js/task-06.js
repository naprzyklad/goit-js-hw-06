const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("input", () => {
  const inputValue = inputElement.value;
  const requiredLength = parseInt(inputElement.getAttribute("data-length"));

  if (inputValue.length === requiredLength) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
});
