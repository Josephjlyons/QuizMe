// Dom Hooks
const time = document.getElementById("timeLeft");
const startQuiz = document.getElementById("startQuiz");
const questionTitles = document.getElementById("questionTitles");
const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const choice4 = document.getElementById("4");
const questionsCards = document.getElementById("questionsCards");
const instructionCard = document.getElementById("instructionCard");


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

// Start button/Timer Starts after alert is clicked/ Removes intro --> Shows first question



// Timer Settings/Score Settings 

let score = 0;
let timer;
let timeLeft = 0;
let currentQuestion = 0;
let i = currentQuestion
// timer function



$("#startQuiz").on("click", function (event) {
    alert("Get Ready!")
    event.preventDefault();
    instructionCard.classList.add("d-none");
    questionsCards.classList.remove("d-none");
    showNextQuestion();

});



function showNextQuestion() {
if ((timeLeft > 0) && currentQuestion < questions.length) {
    questionTitles.innerText = questions[i].questionTitle;
    choice1.innerText = questions[i].choice1;
    choice2.innerText = questions[i].choice2;
    choice3.innerText = questions[i].choice3;
    choice4.innerText = questions[i].choice4;
} else {
    return;
}


}








function start() {
    timeLeft = 90;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        // When timer hits zero
        if (timeLeft <= 0) {
            alert("Out of Time! Try Again!!!")
            clearInterval(timer);
        }

    }, 1000);
    $("#startQuiz").on("click", function (event) {
        event.preventDefault();

    });

}
