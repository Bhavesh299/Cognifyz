function changeColor() {
  var button = document.getElementById("colorButton");
  var randomColor = getRandomColor();
  button.style.backgroundColor = randomColor;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
