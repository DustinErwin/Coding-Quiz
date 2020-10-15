let intro = document.querySelector(".intro");
let quizArea = document.querySelector(".quizArea");

let startBtn = document.getElementById("startBtn");
let btnOne = document.querySelector("#ansOne");
let btnTwo = document.querySelector("#ansTwo");
let btnThree = document.querySelector("#ansThree");
let btnFour = document.querySelector("#ansFour");
let question = document.querySelector("#question");
let isWrong = document.querySelector("#isWrong");
let quizFinish = document.querySelector(".quizFinish");
let score = document.querySelector("#score");
let init = document.querySelector("#init");
let saveBtn = document.querySelector("#save");

let seconds = 60;
let count = 0;
let countDown = 75;
let highScores = [];
let tally = 0;
let teacher = ["Correct!", "Wrong!"];
//Questions
let questions = [
  "How do you add an object to the end of an array?",
  "What is used to set the value of an object that will not change?",
  "To do something to an entire array, you would use this.",
  "Which is used to change styles from the javascript code?",
  "What does DOM stand for?",
  "Which preloaded function is commonly used for debugging?",
  "How do we indirectly find how long an array is?",
  "What is short hand for plus one?",
  "Events happen by using which of these?",
  "We can keep an onclick from triggering any outside elements by using _________.",
];
//Answers
let answerPool = [
  ["push", "concat", "var", "unshift"],
  ["concat", "let", "const", "lock"],
  ["function", "for loop", "querySelector", "else"],
  ["appendChild", "querySelector", "setAttribute", "createElement"],
  [
    "Document Object Model",
    "Deliberate Obscure Meaning",
    "Default Optical Markup",
    "Definately Obvious Moron",
  ],
  ["prompt.log", "alert.log", "console.log", "popup.log"],
  [".push", ".length", ".width", ".end"],
  ["+=", "+1", "1+", "++"],
  [".querySelector", ".addEventListener", "getElementById", ".setAttribute"],
  [
    ".preventMyfault",
    ".preventYourfault",
    "preventTheirfault",
    "preventDefault",
  ],
];
let correctAns = [0, 2, 1, 2, 0, 2, 1, 3, 1, 3];
//Starts the quiz
function go() {
  intro.setAttribute("style", "display: none;");
  quizArea.setAttribute("style", "display: flex;");
  secInt = setInterval(clock, 1000);
  quiz();
}

//Fills quiz area with quiz data
function quiz() {
  console.log(count);
  question.textContent = questions[count];
  btnOne.textContent = answerPool[count][0];
  btnTwo.textContent = answerPool[count][1];
  btnThree.textContent = answerPool[count][2];
  btnFour.textContent = answerPool[count][3];
}
//Collects answers from the user
btnOne.addEventListener("click", function (event) {
  event.stopPropagation();
  Check(0);
});
btnTwo.addEventListener("click", function (event) {
  event.stopPropagation();
  Check(1);
});
btnThree.addEventListener("click", function (event) {
  event.stopPropagation();
  Check(2);
});
btnFour.addEventListener("click", function (event) {
  event.stopPropagation();
  Check(3);
});

//Checks Answers for correctness
function Check(ans) {
  if (correctAns[count] === ans) {
    tally++;

    isWrong.textContent = teacher[0];
  } else {
    clock(10);
    isWrong.textContent = teacher[1];
  }
  count++;
  if (count === 10) {
    quizArea.setAttribute("style", "display: none;");
    end();
    return;
  }

  quiz();
}
function end() {
  quizFinish.setAttribute("style", "display: flex;");
  score.textContent = " " + tally;
}
function save() {
  let scoreObj = {
    initials: init.value,
    score: tally,
  };
  highScores.push(scoreObj);
}

function clock(decrement = 1) {
  seconds -= decrement;
  let timer = document.querySelector("#timer");
  timer.textContent = " " + seconds;
  if (seconds <= 0) {
    clearInterval(secInt);

    end()
  }
}

saveBtn.addEventListener("click", save);
startBtn.addEventListener("click", go);