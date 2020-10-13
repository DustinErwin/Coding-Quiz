let intro = document.querySelector(".intro");
let quizArea = document.querySelector('.quizArea');
let timer = document.querySelector("#timer");
let startBtn = document.getElementById("startBtn");
let btnOne = document.querySelector('#ansOne');
let btnTwo = document.querySelector('#ansTwo');
let btnThree = document.querySelector('#ansThree');
let btnFour = document.querySelector('#ansFour');
let question = document.querySelector('#question')
let count = 0;
let countDown = 75;
let highScores = [];
let tally = [];
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
  "What is short hand for plu one?",
  "Events happen by using which of these?",
  "We can keep an onclick from triggering any ouside elements by using _________.",
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
  [
    ".querySelector",
    ".addEventListener",
    "getElementById",
    ".setAttribute",
  ],
  [
    ".preventMyfault",
    ".preventYourfault",
    "preventTheirfault",
    "preventDefault",
  ],
];
//Starts the quiz
function go() {
  intro.setAttribute('style','display: none;')
  quizArea.setAttribute('style', 'display: flex;')
  quiz()

};

function quiz() {
  
  question.textContent = questions[count]
  btnOne.textContent = answerPool[count][0]
  btnTwo.textContent = answerPool[count][1]
  btnThree.textContent = answerPool[count][2]
  btnFour.textContent = answerPool[count][3]
  count++
  btnOne.addEventListener('click', quiz)
  btnTwo.addEventListener('click', quiz)
  btnThree.addEventListener('click', quiz)
  btnFour.addEventListener('click', quiz)
  if(count === 10){
    quizArea.setAttribute('style', 'display: none;')
  }
};

startBtn.addEventListener("click", go);
