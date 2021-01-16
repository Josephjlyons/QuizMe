$(document).ready(() => {
});
// Dom Hooks
const time = document.getElementById("timeLeft");
const score = document.getElementById("scoreCounter")
const startQuiz = document.getElementById("startQuiz");
const questionTitles = document.getElementById("questionTitles");
const choice1 = document.getElementById("choicebtn1");
const choice2 = document.getElementById("choicebtn2");
const choice3 = document.getElementById("choicebtn3");
const choice4 = document.getElementById("choicebtn4");
const butons = document.getElementsByClassName(".choiceBtn");
const questionsCards = document.getElementById("questionsCards");
const instructionCard = document.getElementById("instructionCard");
const enterScore = document.getElementById("enterScore")


// Quiz questions/choices/correct answers key
const questions = [{

    questionTitle: "Inside which HTML element does JavaScript go?",
    choice1: "<scripting>",
    choice2: "<javascript>",
    choice3: "<script>",
    choice4: "<html>",
    correctChoice: "3"

},
{
    questionTitle: "Where is correct place to insert JavaScript?",
    choice1: "Both the <head> section and the <body> section",
    choice2: "The <head> section",
    choice3: "The <body> section",
    choice4: "Inside the first <div>",
    correctChoice: "1"

},
{
    questionTitle: "Where is correct place to insert JavaScript?",
    choice1: "Both the <head> section and the <body> section",
    choice2: "The <head> section",
    choice3: "The <body> section",
    choice4: "Inside the first <div>",
    correctChoice: "1"

},
{
    questionTitle: "How do you call a function named myFunction",
    choice1: "By its phone number",
    choice2: "Call myFunction",
    choice3: "Call function myFunction",
    choice4: "myFunction()",
    correctChoice: "4"
},

{
    questionTitle: "Which even occurs when the user clicks on HTML element?",
    choice1: "onclick",
    choice2: "onchange",
    choice3: "onmouseclick",
    choice4: "clickly clickly clickly",
    correctChoice: "1"

},

{

    questionTitle: "Which operator is used to assign a value to a variable?",
    choice1: "-",
    choice2: "=",
    choice3: "+",
    choice4: "&",
    correctChoice: "2"
}

]



// Timer Settings/Score Settings 

let scoreCounter = 100;
let timer;
let timeLeft = 0;
let currentQuestion = -1;
let i = currentQuestion;
let lastQuestion = questions.length;
// timer function


// Quiz start button, removes instruction card and shows first quesiton card

function showNextQuestion() {
    if ((timeLeft > 0) && currentQuestion < questions.length, i++) {
        questionTitles.innerText = questions[i].questionTitle;
        choice1.innerText = questions[i].choice1;
        choice2.innerText = questions[i].choice2;
        choice3.innerText = questions[i].choice3;
        choice4.innerText = questions[i].choice4;
    }
    if (currentQuestion[i] === lastQuestion) {

        return enterScoreCard();

    }
};

function checkCorrect (){
    if (answer !== questions.correctChoice){
        timeLeft = timeLeft -10;
        scoreCounter = scoreCounter -15;
    }
}


// function answerChoice(event) {
//     event.preventDefault();
//     let i = currentQuestion;
//     const choiceBtn = event.target.classList.contains("correctBtn")
//     if (choiceBtn) {
//         const choiceBtnId = event.target.id;
//         if (choiceBtnId !== questions[i].correctChoice) {
//             timeLeft--
//             currentQuestion++
//             showNextQuestion(currentQuestion);
//             timeLeft = timeLeft - 5;
//         }
//     }

// }


$("#startQuiz").on("click", function (event) {
    alert("Get Ready!")
    event.preventDefault();
    instructionCard.classList.add("d-none");
    questionsCards.classList.remove("d-none");
    showNextQuestion();

});
// Start Game
function start() {
    timeLeft = 45;
    document.getElementById("timeLeft").innerHTML = timeLeft;

     let timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        // When timer hits zero
        if (timeLeft <= 0) {
            clearInterval(timer);
            return enterScoreCard()
        }

    }, 1000);
    $("#startQuiz").on("click", function (event) {
        event.preventDefault();

    });

}

// displays score card when timer hits zero
function enterScoreCard() {
    questionsCards.classList.add("d-none");
    enterScore.classList.remove("d-none");
}