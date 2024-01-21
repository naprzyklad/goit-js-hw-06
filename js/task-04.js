const valueElement = document.getElementById("value");

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

decrementButton.addEventListener("click", () => {
  const currentValue = parseInt(valueElement.textContent);
  valueElement.textContent = currentValue - 1;
});

incrementButton.addEventListener("click", () => {
  const currentValue = parseInt(valueElement.textContent);
  valueElement.textContent = currentValue + 1;
});
