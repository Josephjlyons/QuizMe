$(document).ready(() => {
});
// Dom Hooks
const time = document.getElementById("timeLeft");
const score = document.getElementById("scoreCounter")
const startQuiz = document.getElementById("startQuiz");
const questionTitles = document.getElementById("questionTitles");
const choiceA = document.getElementById("choicebtn1");
const choiceB = document.getElementById("choicebtn2");
const choiceC = document.getElementById("choicebtn3");
const choiceD = document.getElementById("choicebtn4");
const buttons = document.getElementsByClassName(".choiceBtn");
const questionsCards = document.getElementById("questionsCards");
const instructionCard = document.getElementById("instructionCard");
const enterScore = document.getElementById("enterScore")


// Quiz questions/choices/correct answers key
let questions = [{

    questionTitle: "Inside which HTML element does JavaScript go?",
    choices: ["a. <scripting>", "b. <javascript>", "c. <script>", "d. <html>"],
    correctChoice: "c"



},
{
    questionTitle: "Where is correct place to insert JavaScript?",
    choices: ["a. both the <head> and <body> section", "b. The <head> section", "c. The <body> section", "d. Inside the first <div>"],
    correctChoice: "a"
},


{
    questionTitle: "How do you call a function named myFunction",
    choices: ["a. By its phone number", "b. Call myFunction", "c. Call function myFunction", "d. myFunction()"],
    correctChoice: "d"

},

{
    questionTitle: "Which even occurs when the user clicks on HTML element?",
    choices: ["a. onclick", "b. onchange", "c. onmouseclick", "d. clickly clickly clickly"],
    correctChoice: "a"

},

{

    questionTitle: "Which operator is used to assign a value to a variable?",
    choices: ["a. - ", "b. = ", "c. + ", "d. & "],
    correctChoice: "b"

},
{

    questionTitle: "Which operator is used to assign a value to a variable?",
    choices: ["a. - ", "b. = ", "c. + ", "d. & "],
    correctChoice: "b"

}
];



// Timer Settings/Score Settings 
let countDownID;
let currentQuestion = 0;
let questionNumber;
let correctChoice = 0;
let scoreCount;
let timer;
let timeLeft = 45;
let i = currentQuestion;
const lastQuestion = questions.length - 1;




// Quiz start button, removes instruction card and shows first quesiton card

function showNextQuestion() {

    questionTitles.innerText = questions[currentQuestion].questionTitle;
    choiceA.innerText = questions[currentQuestion].choices[0];
    choiceB.innerText = questions[currentQuestion].choices[1];
    choiceC.innerText = questions[currentQuestion].choices[2];
    choiceD.innerText = questions[currentQuestion].choices[3];

    if (currentQuestion >= lastQuestion) {
        return enterScoreCard();
    }

}


// start button 


$("#startQuiz").on("click", function (event) {
    event.preventDefault();
    instructionCard.classList.add("d-none");
    questionsCards.classList.remove("d-none");
    // // When timer hits zero or all questions have been answered!
    if (timeLeft <= 0 || currentQuestion === lastQuestion) {
        stopInterval(timeLeft);
        return enterScoreCard()
    }
});


// Start Game
function start() {
    // timerCountDown();
    showNextQuestion()


}

// timer Countdown Function

function timerCountDown() {
    // let timeLeft = 45;
    return setInterval(() => {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        if (timeLeft < 1) {
            clearInterval(countDownID)
            return enterScoreCard();


        }

    }, 1000);

}
countDownID = timerCountDown();


// displays score card when timer hits zero
function enterScoreCard() {
    questionsCards.classList.add("d-none");
    enterScore.classList.remove("d-none");
};


// choice buttons that control time minus for wrong answers

$("#choicebtn1").on("click", function () {
    if (this.dataset.choice !== questions[currentQuestion].correctChoice) {
        timeLeft = timeLeft - 4
    };

    currentQuestion++
    showNextQuestion();
}),

    $("#choicebtn2").on("click", function () {
        if (this.dataset.choice !== questions[currentQuestion].correctChoice) {
            timeLeft = timeLeft - 4
        };
        currentQuestion++
        showNextQuestion();

    }),

    $("#choicebtn3").on("click", function () {
        if (this.dataset.choice !== questions[currentQuestion].correctChoice) {
            timeLeft = timeLeft - 4
        };
        currentQuestion++
        showNextQuestion();

    }),

    $("#choicebtn4").on("click", function () {
        if (this.dataset.choice !== questions[currentQuestion].correctChoice) {
            timeLeft = timeLeft - 4
        };
        currentQuestion++
        showNextQuestion();

    });

