const sizeControl = document.getElementById("font-size-control");
const showText = document.getElementById("text");

sizeControl.addEventListener("input", () => {
  const fontSize = sizeControl.value;
  showText.style.fontSize = fontSize + "px";
});
