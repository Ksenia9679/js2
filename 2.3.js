function showFontSize() {
  let elem = document.getElementById("elem");
  let fontSize = window.getComputedStyle(elem, null).getPropertyValue('font-size');
  let fontSizeWithoutUnit = parseFloat(fontSize);
  alert("Размер шрифта: " + fontSizeWithoutUnit);
}