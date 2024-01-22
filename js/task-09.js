document.addEventListener("DOMContentLoaded", () => {
  const colorSpan = document.querySelector(".color");
  const colorButton = document.querySelector(".change-color");

  colorButton.addEventListener("click", () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
  });

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
});
