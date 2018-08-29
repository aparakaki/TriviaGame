var correct;
var incorrect;
var unanswered;
var isRunning = false;          //timer
var answerInt;                  //setInterval variable for questions
var index;                      //keeps track on which question is on
var timeInt;                    //setInterval variable for time
var timer;
var questionArray = [
    q1 ={ question: "question1",
        a1: "answer1.1",
        a2: "answer2.1",
        a3: "answer3.1",
        a4: "answer4.1",
        answer: "a1"},
    q2 ={ question: "question2",
        a1: "answer1.2",
        a2: "answer2.2",
        a3: "answer3.2",
        a4: "answer4.2",
        answer: "a2"},
    q3 ={ question: "question3",
        a1: "answer1.3",
        a2: "answer2.3",
        a3: "answer3.3",
        a4: "answer4.3",
        answer: "a3"}
];

$("#question").html("<button id='start'>Start</button>")

function resetGame() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    count = 0;
    index = 0;
    timer = 30;
    // isRunning = false;
};

function startGame() {
    console.log("startGame");
    if(!isRunning) {
        answerInt = setInterval(displayQuestion, 30000);
        timeInt = setInterval(displayTimer, 1000);
        isRunning = true;
    }
};

function displayQuestion() {
    $("#question").text(`${questionArray[index].question}`);
    $("#a1").text(`${questionArray[index].a1}`);
    $("#a2").text(`${questionArray[index].a2}`);
    $("#a3").text(`${questionArray[index].a3}`);
    $("#a4").text(`${questionArray[index].a4}`);
    
    console.log("questions");
};

function displayTimer() {
    $("#timer-display").text(`Time Remaining: ${timer} seconds`)
    timer--;

    if(timer === 0) {
        
    }
};

function showAnswer() {
    index++;
};

resetGame();
$("#start").on("click", function() {
    startGame();
    displayQuestion();
    displayTimer();
});

$(".answer").on("click", function() {
    var x = $(this).attr("id");
    if(x === questionArray[index].answer) {
        
    }
    else {

    }
});