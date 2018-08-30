var correct;
var incorrect;
var unanswered;
var isRunning;                  //timer
var answerInt;                  //setInterval variable for questions
var index;                      //keeps track on which question is on
var timeInt;                    //setInterval variable for time
var timer;
var outOfTime;                   //determines whether the user ran out of time;
var wrong;                      //determines if answer is wrong
var questionArray = [
    q1 ={ question: "Where is Wakanda located?",
        a1: "South America",
        a2: "Africa",
        a3: "Antartica",
        a4: "Australia",
        answerId: "a2",
        answer:"Africa",
        image: "assets/images/wakanda.jpeg"},
    q2 ={ question: "Thor's hammer mjolnir is made of metal from the heart of a dying what?",
        a1: "Asteroid",
        a2: "Comet",
        a3: "Star",
        a4: "Black Hole",
        answerId: "a3",
        answer: "Star",
        image: "assets/images/hammer.jpg"},
    q3 ={ question: "Peter Parker works as a photographer for:",
        a1: "The Daily Planet",
        a2: "The Daile Bugle",
        a3: "The New York Times",
        a4: "The Rolling Stone",
        answerId: "a2",
        answer: "The Daile Bugle",
        image: "assets/images/spiderman.jpg"},
    q4 ={ question: "Capitan America was frozen in which war?",
        a1: "World War I",
        a2: "World War II",
        a3: "Cold War",
        a4: "American Civil War",
        answerId: "a2",
        answer: "World War II",
        image: "assets/images/frozen.jpg"},
    q5 ={ question: "What was Black Widow before becoming a Russian spy?",
        a1: "Ballerina",
        a2: "Military Pilot",
        a3: "Thief",
        a4: "Athlete",
        answerId: "a1",
        answer: "Ballerina",
        image: "assets/images/blackwidow.jpg"},
    q6 ={ question: "Deadpool joined th Weapon X program because:",
        a1: "He was forced to",
        a2: "He thought it would be fun",
        a3: "He had incurable cancer",
        a4: "He wanted to fight for justice",
        answerId: "a3",
        answer: "He had incurable cancer",
        image: "assets/images/deadpool.jpg"},
    q7 ={ question: "What vehicle is the Avengers primary mode of transportation?",
        a1: "A bus",
        a2: "The Quinjet",
        a3: "The Blackbird",
        a4: "The Blackhawk",
        answerId: "a2",
        answer: "The Quinjet",
        image: "assets/images/quinjet.jpg"},
    q8 ={ question: "The Vision is an android created by:",
        a1: "Reed Richards",
        a2: "Tony Stark",
        a3: "Ultron",
        a4: "Doctor Doom",
        answerId: "a3",
        answer: "Ultron",
        image: "assets/images/vision.jpg"},
    q9 ={ question: "Jarvis was at one time a member of:",
        a1: "The X-Men",
        a2: "The Royal Air Force",
        a3: "S.H.I.E.L.D.",
        a4: "The CIA",
        answerId: "a2",
        answer: "The Royal Air Force",
        image: "assets/images/jarvis.jpg"},
    q10 ={ question: "What strong metal is found in Wakanda?",
        a1: "Kevlar",
        a2: "Kryptonite",
        a3: "Adamantium",
        a4: "Vibranium",
        answerId: "a4",
        answer: "Vibranium",
        image: "assets/images/vibranium.jpg"}
];

$("#question").html("<div class='text-center'><button id='start' type='button' class='btn btn-light'>Start Game</button></div>");

function resetGame() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    count = 0;
    index = 0;
    timer = 20;

    isRunning = false;
    outOfTime = false;
    wrong = false;
};

function startGame() {
    console.log("startGame");
    if(!isRunning) {
        displayQuestion();
        displayTimer();
        timeInt = setInterval(displayTimer, 1000);
        isRunning = true;
        wrong = false;
        outOfTime = false;
    }
};

function displayQuestion() {
    if(index === questionArray.length) {                //displays results once game ends
        clearInterval(timeInt);
        $("#question").text("Game Over. Here are your results:");
        $("#a1").text(`Correct Answers: ${correct}`);
        $("#a2").text(`Incorrect Answers: ${incorrect}`);
        $("#a3").text(`Unanswered: ${unanswered}`);
        $("#a4").html("<div class='text-center'><button id='play-again' type='button' class='btn btn-info'>Play Again?</button></div>");
        return;
    }

    $("#a1, #a2, #a3, #a4").addClass("answer");

    $("#question").text(`${questionArray[index].question}`);
    $("#a1").text(`${questionArray[index].a1}`);
    $("#a2").text(`${questionArray[index].a2}`);
    $("#a3").text(`${questionArray[index].a3}`);
    $("#a4").text(`${questionArray[index].a4}`);

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
    
    $("#a1, #a2, #a3, #a4").text("");
    $("#a1, #a2, #a3, #a4").removeClass("answer");
    // $("#a2").text("");
    // $("#a3").text("");
    // $("#a4").text("");

    if(outOfTime) {
        $("#question").text("Out of Time!");
        unanswered += 1;
    }  
    if(outOfTime || wrong) {
        $("#a1").text(`The correct answer was: ${questionArray[index].answer}`);
    }
    $("#a2").append(`<img src="${questionArray[index].image}" class="img-thumbnail img-size">`);
    index++;
    isRunning = false;
    timer = 20;
    // setTimeout(displayQuestion, 2000);
    setTimeout(startGame, 3000);
};

function checkAnswer(a) {
    
    if(a === questionArray[index].answerId) {
        $("#question").text("Correct!");
        correct += 1;
    }
    else {
        $("#question").text("Wrong!");
        incorrect += 1;
        wrong = true;
    }
    
    showAnswer();
}

resetGame();

$("button").on("click", function() {
    if (!$(".container").hasClass("cformat")) {
        $(".container").addClass("cformat");
    }
    resetGame();
    startGame();
});

$(document).on("click", ".answer", function(){
    var x = $(this).attr("id");
    checkAnswer(x); 
})

// $("#start").on("click", function() {
//     $(".container").addClass("cformat");
//     startGame();
// });

// $(".answer").on("click", function() {
//     if($(this).hasClass("clickable")) {
//        var x = $(this).attr("id");
//         checkAnswer(x); 
//     }
//     else {
//         console.log("image clicked");
//     }
// });

// $("#play-again").on("click", function() {
//     resetGame();
//     startGame();
// })