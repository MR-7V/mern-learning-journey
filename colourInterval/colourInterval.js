document.addEventListener("DOMContentLoaded", function () {
  var startButton = document.getElementById("startBtn");
  var stopButton = document.getElementById("stopBtn");
  var changeColor;

  startButton.addEventListener("click", function () {
    if (!changeColor) {
      changeColor = setInterval(changeDivColor, 1000);
    }
  });

  stopButton.addEventListener("click", function () {
    clearInterval(changeColor);
    changeColor = null;
  });
});

function changeDivColor() {
  var div = document.getElementById("screen");
  var randomColor = getRandomRGBColor();
  div.style.backgroundColor = randomColor;
}

function getRandomRGBColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + "," + green + "," + blue + ")";
}
