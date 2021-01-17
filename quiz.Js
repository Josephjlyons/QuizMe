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
const questions = [{

    questionTitle: "Inside which HTML element does JavaScript go?",
    choices: ["a. <scripting>", "b. <javascript>", "c. <script>", "d. <html>"],
    correctChoice: "c. <script>"



},
{
    questionTitle: "Where is correct place to insert JavaScript?",
    choices: ["a. both the <head> and <body> section", "b. The <head> section", "c. The <body> section", "d. Inside the first <div>"],
    correctChoice: "a. both the <head> and <body> section"
},


{
    questionTitle: "How do you call a function named myFunction",
    choices: ["a. By its phone number", "b. Call myFunction", "c. Call function myFunction", "d. myFunction()"],
    correctChoice: "d. myFunction()"

},

{
    questionTitle: "Which even occurs when the user clicks on HTML element?",
    choices: ["a. onclick", "b. onchange", "c. onmouseclick", "d. clickly clickly clickly"],
    correctChoice: "a. onclick"

},

{

    questionTitle: "Which operator is used to assign a value to a variable?",
    choices: ["a. - ", "b. = ", "c. + ", "d. & "],
    correctChoice: "b. = "

}

];



// Timer Settings/Score Settings 

// let scoreCounter = 100;
// let timer;
// let timeLeft = 0;
// let currentQuestion = -1;
// let i = currentQuestion;
// let lastQuestion = questions.length;
let questionsIndex = 0;
let questionNumber ;
let correctChoice = 0;
let scoreCount;
let timer;
let timeLeft = 0;
let i = questionsIndex;




// Quiz start button, removes instruction card and shows first quesiton card

function showNextQuestion() {
    questionTitles.innerText = questions[questionsIndex].questionTitle;
    choiceA.innerText = questions[questionsIndex].choices[0];
    choiceB.innerText = questions[questionsIndex].choices[1];
    choiceC.innerText = questions[questionsIndex].choices[2];
    choiceD.innerText = questions[questionsIndex].choices[3];
}

// checking for answers
function checkCorrect(correctChoice) {
    if (questions[questionsIndex].correctChoice === questions[questionsIndex].choices[correctChoice]) {
        timeLeft = timeLeft + 10;

    }


    if (questionsIndex < questions.length, i++) {
        showNextQuestion();
    }else{
        return enterScoreCard();
    }

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
    
    
    // console log test for buttons
    
    $("#choicebtn1").on("click", function () {
        showNextQuestion();
        console.log("test")
    });
    
    $("#choicebtn2").on("click", function () {
        showNextQuestion();
        console.log("test2")
    });
    
    $("#choicebtn3").on("click", function () {
        showNextQuestion();
        console.log("test3")
    });
    
    $("#choicebtn4").on("click", function () {
        showNextQuestion();
        console.log("test4")
    });
    
    