let highScores = []
let timer = document.querySelector('#timer')
let questions = [
    'How do you add an object to the end of an array?',
    'What is used to set the value of an object that will not change?',
    'To do something to an entire array, you would use this.',
    'Which is used to change styles from the javascript code?',
    'What does DOM stand for?',
    'Which preloaded function ised commonly used for debugging?',
    'How do we indirectly find how long an array is?',
    'What is short hand for plu one?',
    'Events happen by using which of these?',
    'We can keep an onclick from triggering any ouside elements by usiing _________.'

]
let countDown = 75
let startQuiz = document.querySelector('#start')
let  tally = []
let teacher = ['Correct!','Wrong!']
let answerPool = {
    one: ['push', 'concat', 'var', 'unshift'],
    two:['concat','let','const','lock'],
    three:['function','for loop','querySelector','else'],
    four:['appendChild','querySelector','setAttribute','createElement'],
    five:['Document Object Model','Deliberate Obscure Meaning','Default Optical Markup','Definately Obvious Moron'],
    six:['prompt.log','alert.log','console.log','popup.log'],
    seven:['.push','.length','.width','.end'],
    eight:['+=','+1','1+','++'],
    nine:['.querySelector','.addEventListener','getElementById','.setAttribute'],
    ten:['.preventMyfault','.preventYourfault','preventTheirfault','preventDefault'],
}