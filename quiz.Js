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
const butons = document.getElementsByClassName(".choiceBtn");
const questionsCards = document.getElementById("questionsCards");
const instructionCard = document.getElementById("instructionCard");
const enterScore = document.getElementById("enterScore")


// Quiz questions/choices/correct answers key
const questions = [{

    questionTitle: "Inside which HTML element does JavaScript go?",
    choices: ["a. <scripting>", "b. <javascript>", "c. <script>", "d. <html>"],
    // choice2: "<javascript>",
    // choice3: "<script>",
    // choice4: "<html>",
    // correctChoice: "3"

},
{
    questionTitle: "Where is correct place to insert JavaScript?",
    choice1: ["a. both the <head> and <body> section", "b.The <head> section", "c.The <body> section", "d.Inside the first <div>"]
},
    
    //     choice2: "",
    //     choice3: "",
    //     choice4: "",
    //     correctChoice: "1"

    // },
    {
        questionTitle: "How do you call a function named myFunction",
        choices: ["a. By its phone number","b. Call myFunction","c. Call function myFunction","d.myFunction()"]
        // choice2: 
        // choice3: 
        // choice4: 
        // correctChoice: "4"
    },

    // {
    //     questionTitle: "Which even occurs when the user clicks on HTML element?",
    //     choice1: "onclick",
    //     choice2: "onchange",
    //     choice3: "onmouseclick",
    //     choice4: "clickly clickly clickly",
    //     correctChoice: "1"

    // },

    // {

    //     questionTitle: "Which operator is used to assign a value to a variable?",
    //     choice1: "-",
    //     choice2: "=",
    //     choice3: "+",
    //     choice4: "&",
    //     correctChoice: "2"
    // }

]



// Timer Settings/Score Settings 

// let scoreCounter = 100;
// let timer;
// let timeLeft = 0;
// let currentQuestion = -1;
// let i = currentQuestion;
// let lastQuestion = questions.length;
let questionIndex = 0;
let questionNumber = 0;
let correctChoice = 0;
let scoreCount;



// Quiz start button, removes instruction card and shows first quesiton card

function showNextQuestion() {

    questionTitles.innerText = questions[questionIndex].questionTitle;
    choiceA.innerText = questions[questionIndex].choices[0];
    choiceB.innerText = questions[questionIndex].choices[1];
    choiceC.innerText = questions[questionIndex].choices[2];
    choiceD.innerText = questions[questionIndex].choices[3];
    
//     questionIndex++;
// if (questionIndex < questions.length) {
//     showNextQuestion();
// } else {
//     enterScoreCard();
// };


}


function checkCorrect() {
    let = questions[currentQuestion];

    timeLeft = timeLeft - 10;
    scoreCounter = scoreCounter - 15;
    return;
}





$("#startQuiz").on("click", function (event) {
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



