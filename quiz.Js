// Quiz questions/choices/correct answers key

let questions = [{

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

    },9000);
}