// Dom Hooks
const time = document.getElementById("timeLeft");
const startQuiz = document.getElementById("startQuiz");
const questionTitle = document.getElementById("questionTitle");
const answerBtn1 = document.getElementById("1");
const answerBtn2 = document.getElementById("2");
const answerBtn3 = document.getElementById("3");
const answerBtn4 = document.getElementById("4");
const questionCard = document.getElementById("questionCards")


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
    questionTitle: "How do you call a function named myFunction",
    choice1: "By its phone number",
    choice2: "call myFunction",
    choice3: "call function myFunction",
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
},

]

// Start button/Timer Starts after alert is clicked/ Removes intro --> Shows first question

$("#startQuiz").on("click", function(event) {
    alert("Get Ready!")
    event.preventDefault();
    instructionCard.classList.add("d-none");
    questionCards.classList.remove.add("d-none");

});

// // function showQuestion(questions) {
  
// // }

// $("#startQuiz").on("click", function(event) {
//    event.preventDefault();
//   questionCard.innerHTML = questionCard.questions
// });


// Timer Settings/Score Settings 

let score = 0;
let timer;
let timeLeft = 0;
let currentQuestion = 0;

// timer function

function start() {
    timeLeft = 90;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        // When timer hits zero
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }

    },1000 );
}




