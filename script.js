/**
 * Variable declaration
 */

// Main data structure
var quizQuestions = [
  {
    question: "What does HTML stand for?",
    answers: {
      a: "Hot Tamali Mama Llama",
      b: "Here They Make Lobcocks",
      c: "Horrible Terrible Music, Limp-Bizkit",
      d: "Hypertext Markup Language",
    },
    correctAnswer: "d",
  },
  {
    question: "Which of the below is a correct syntax for defining a function?",
    answers: {
      a: "function test() {}",
      b: "function test[] {}",
      c: "test function() {}",
      d: "None of these are correct.",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which of the below is the correct syntax for a for loop? (Assume array is defined as a non-empty Array)",
    answers: {
      a: "for (i = 0; i < array.length; i++) {}",
      b: "for (var i = 0; i < array.length; i++) {}",
      c: "for (var i = 0; i < array; i++) {}",
      d: "None of these are correct.",
    },
    correctAnswer: "b",
  },
  {
    question: "What do you call a function without a name?",
    answers: {
      a: "Anonymous function",
      b: "No-name function",
      c: "Bob",
      d: "Theodore",
    },
    correctAnswer: "a",
  },
  {
    question: "Which of the below is not a proper sematic element?",
    answers: {
      a: "header",
      b: "aside",
      c: "boody",
      d: "main",
    },
    correctAnswer: "c",
  },
];

// index of the question currently on
var questionIndex = 0;

// how many seconds left, also serves as the score
var secondsLeft = 75;
var timer = document.createElement("h5");
var timerInterval;

/**
 * DOM Creation
 */
var quizContainer = document.getElementById("quizContainer");
var answersContainer = document.getElementById("answersContainer");

var header = document.createElement("h3");
header.innerText = "Pop Quiz!";
quizContainer.appendChild(header);

var introText = document.createElement("p");
introText.className = "lead";
introText.innerHTML =
  "You will be asked a series of questions pertaining to JavaScript. You have 75 seconds to complete the quiz. There are 5 questions. Everytime you get an incorrect answer, you will lose 15 seconds. High scores are ranked by who finishes with the highest time left. Good luck!";
quizContainer.appendChild(introText);

var startButton = document.createElement("button");
startButton.innerHTML = "Start Quiz";
startButton.className = "btn btn-success btn-block mb-2";
startButton.addEventListener("click", startQuiz);
quizContainer.appendChild(startButton);

var saveScoreInput = document.createElement("input");
saveScoreInput.className = "form-group p-1";
saveScoreInput.placeholder = "Enter your initials";

var saveScoreButton = document.createElement("button");
saveScoreButton.innerHTML = "Save Score";
saveScoreButton.className = "btn btn-success btn-block";
saveScoreButton.addEventListener("click", saveUserScore);

var tryAgainButton = document.createElement("button");
tryAgainButton.innerHTML = "Try Again";
tryAgainButton.className = "btn btn-info btn-block";
tryAgainButton.addEventListener("click", function () {
  window.location.reload();
});

var currentQuestion = document.createElement("p");
currentQuestion.classList = "lead";

var answerA = document.createElement("button");
answerA.className = "btn btn-success btn-block mb-2";
answerA.addEventListener("click", function () {
  if (quizQuestions[questionIndex].correctAnswer === "a") {
    addCorrect();
  } else {
    secondsLeft = secondsLeft - 15;
    addIncorrect();
  }

  questionIndex++;

  doNextQuestion();
});

var answerB = document.createElement("button");
answerB.className = "btn btn-success btn-block mb-2";
answerB.addEventListener("click", function () {
  if (quizQuestions[questionIndex].correctAnswer === "b") {
    addCorrect();
  } else {
    secondsLeft = secondsLeft - 15;
    addIncorrect();
  }

  questionIndex++;

  doNextQuestion();
});

var answerC = document.createElement("button");
answerC.className = "btn btn-success btn-block mb-2";
answerC.addEventListener("click", function () {
  if (quizQuestions[questionIndex].correctAnswer === "c") {
    addCorrect();
  } else {
    secondsLeft = secondsLeft - 15;
    addIncorrect();
  }

  questionIndex++;

  doNextQuestion();
});

var answerD = document.createElement("button");
answerD.className = "btn btn-success";
answerD.addEventListener("click", function () {
  if (quizQuestions[questionIndex].correctAnswer === "d") {
    addCorrect();
  } else {
    secondsLeft = secondsLeft - 15;
    addIncorrect();
  }

  questionIndex++;

  doNextQuestion();
});

function startQuiz() {
  quizContainer.appendChild(timer);
  startButton.remove();
  introText.remove();
  header.remove();

  countdown();
  doNextQuestion();
}

function doNextQuestion() {
  if (questionIndex < quizQuestions.length) {
    // add the currentQuestion
    quizContainer.appendChild(currentQuestion);

    // add the answer buttons
    quizContainer.appendChild(answerA);
    quizContainer.appendChild(answerB);
    quizContainer.appendChild(answerC);
    quizContainer.appendChild(answerD);

    // give the answer buttons and the question their text
    currentQuestion.innerHTML = quizQuestions[questionIndex].question;
    answerA.innerHTML = quizQuestions[questionIndex].answers.a;
    answerB.innerHTML = quizQuestions[questionIndex].answers.b;
    answerC.innerHTML = quizQuestions[questionIndex].answers.c;
    answerD.innerHTML = quizQuestions[questionIndex].answers.d;
  } else {
    scoreScreen();
  }
}

function countdown() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timer.innerHTML = secondsLeft + " seconds remaining!";
    timer.className = "align-self-end text-danger";
    if (secondsLeft === 0) {
      scoreScreen();
    }
  }, 1000);
}

function scoreScreen() {
  clearInterval(timerInterval);
  timer.remove();
  currentQuestion.remove();
  header.remove();
  answerA.remove();
  answerB.remove();
  answerC.remove();
  answerD.remove();

  var timeScore = document.createElement("h2");
  timeScore.innerHTML = "Your Score: " + secondsLeft;

  quizContainer.appendChild(timeScore);
  quizContainer.appendChild(saveScoreInput);
  quizContainer.appendChild(saveScoreButton);
  quizContainer.appendChild(tryAgainButton);
}

function addCorrect() {
  var correctSpan = document.createElement("span");
  correctSpan.className = "text-success font-weight-bold m-2";
  correctSpan.innerHTML = "	&#10003;";

  answersContainer.appendChild(correctSpan);
}

function addIncorrect() {
  var incorrectSpan = document.createElement("span");
  incorrectSpan.className = "text-danger font-weight-bold m-2";
  incorrectSpan.innerHTML = "X";

  answersContainer.appendChild(incorrectSpan);
}

function saveUserScore() {
  var highScores = getHighScores();

  var userInitials = saveScoreInput.value;

  if (userInitials) {
    highScores.push({ user: userInitials, score: secondsLeft });
  }

  var sortedScores = sortScores(highScores);

  localStorage.setItem("highScores", JSON.stringify(sortedScores));

  document.getElementById("highScores").click();
}

function sortScores(scores) {
  return scores
    .sort(function (a, b) {
      return a.score - b.score;
    })
    .reverse();
}

function getHighScores() {
  return localStorage.getItem("highScores")
    ? JSON.parse(localStorage.getItem("highScores"))
    : [];
}
