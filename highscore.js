var highScores = localStorage.getItem("highScores")
  ? JSON.parse(localStorage.getItem("highScores"))
  : [];

var container = document.getElementById("highScoresContainer");

var tryAgainButton = document.createElement("button");
tryAgainButton.innerHTML = "Try Again";
tryAgainButton.className = "btn btn-info btn-block mt-2";
tryAgainButton.addEventListener("click", function () {
  document.getElementById("quiz").click();
});

for (var i = 0; i < highScores.length; i++) {
  var highScore = highScores[i].user.toUpperCase() + ": " + highScores[i].score;
  var userDisplay = document.createElement("h5");
  userDisplay.innerText = i + 1 + ". " + highScore;

  container.appendChild(userDisplay);

  if (i + 1 === 10) {
    break;
  }
}

container.appendChild(tryAgainButton);
