var correct;
var incorrect;
var unanswered;
var isRunning = false;          //timer
var answerInt;                  //setInterval variable for questions
var index;                      //keeps track on which question is on
var timeInt;                    //setInterval variable for time
var timer;
var outOfTime = false;          //determines whether the user ran out of time;
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
        displayQuestion();
        displayTimer();
        timeInt = setInterval(displayTimer, 1000);
        isRunning = true;
    }
};

function displayQuestion() {
    if(index === questionArray.length) {
        return;
    }
    // $("#timer-display").text(`Time Remaining: ${timer} seconds`);
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

    if(timer < 0) {
        outOfTime = true;
        showAnswer();
    }
};

function showAnswer() {
    clearInterval(timeInt);
    if(outOfTime) {
        $("#question").text("Out of Time!");
        unanswered += 1;
    }
  
    $("#a1").text("");
    $("#a2").text("");
    $("#a3").text("");
    $("#a4").text("");
    index++;
    isRunning = false;
    timer = 30;
    // setTimeout(displayQuestion, 3000);
    setTimeout(startGame, 3000);
};

function checkAnswer(a) {
    // clearInterval(answerInt);
    
    if(a === questionArray[index].answer) {
        $("#question").text("Correct!");
        correct += 1;
    }
    else {
        $("#question").text("Wrong!");
        incorrect += 1;
    }
    
    showAnswer();
}

resetGame();

$("#start").on("click", function() {
    startGame();
});

$(".answer").on("click", function() {
    var x = $(this).attr("id");
    checkAnswer(x);
});