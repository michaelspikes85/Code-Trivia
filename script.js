var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("start");

function startQuiz() {}

function buildQuiz() {
  var output = [];
  quizQuestions.forEach((currentQuestion, questionNumber) => {
    var answers = [];
    for (letter in currentQuestion.answers) {
      answers.push();
    }
  });
}

var quizQuestions = [
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
];

buildQuiz();

startButton.addEventListener("click", startQuiz);
