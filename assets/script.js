let intro = document.querySelector(".intro");
let quizArea = document.querySelector(".quizArea");
let comment = document.querySelector("#comment");
let startBtn = document.getElementById("startBtn");
let btnOne = document.querySelector("#ansOne");
let btnTwo = document.querySelector("#ansTwo");
let btnThree = document.querySelector("#ansThree");
let btnFour = document.querySelector("#ansFour");
let question = document.querySelector("#question");

let quizFinish = document.querySelector(".quizFinish");
let score = document.querySelector("#score");
let init = document.querySelector("#init");
let saveBtn = document.querySelector("#save");
let scrList = document.querySelector("#scoreList");
let chkHghscr = document.querySelector("#chkHghscr");
let ding;
let buzz;
let seconds = 60;
let count = 0;
let countDown = 75;
let highScores = [];
let tally = 0;

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
  seconds = 60;
  tally = 0;
  count = 0;
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

//Checks Answers for correctness, removes time if wrong
function Check(ans) {
  if (correctAns[count] === ans) {
    tally++;
    ding = new Audio("assets/ding.mp3");
    ding.play();
  } else {
    clock(10);
    buzz = new Audio("assets/buzz.wav");
    buzz.play();
  }
  count++;
  if (count === 10) {
    quizArea.setAttribute("style", "display: none;");
    end();
    return;
  }
  quiz();
}
//Brings up endgame input
function end() {
  clearInterval(secInt)
  quizArea.setAttribute("style", "display: none;");
  quizFinish.setAttribute("style", "display: flex;");
  score.textContent = " " + tally;
}
//Adds initials to highscores and returns to main screen
function save() {
  let scoreObj = {
    initials: init.value,
    score: tally,
  };
  highScores.push(scoreObj);
  quizFinish.setAttribute("style", "display: none;");
  intro.setAttribute("style", "display: flex;");
  
}
//Controls timer
function clock(decrement = 1) {
  seconds -= decrement;
  let timer = document.querySelector("#timer");
  if (seconds <= 0) {
    clearInterval(secInt);
    seconds = 0;
    comment.textContent = "You ran out of time!";
    timer.textContent = " " + seconds;
    end();
    return;
  }

  timer.textContent = " " + seconds;
}
//Sorts and populates high score list
function scoreList() {
  highScores.sort();
  for (let i = 0; i < highScores.length; i++) {
    let li = scrList.createElement('li');
    scrList.appendChild(li);
    li.textContent = highScores[i];
  }
  scrList.setAttribute("style", "display: block;");
}
chkHghscr.addEventListener("click", scoreList);
saveBtn.addEventListener("click", save);
startBtn.addEventListener("click", go);
