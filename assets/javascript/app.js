
//global variables

var score = 0;
var answers = [];
var correctAns = 0;
var incorrectAns = 0;
var noAnswer = 0;
var useranswer
var questionContainer
var currentQuestion = 0;
var setIntervalID;
var setTimeoutID;
var timer = 0
var clock = 31
var arrayIndex = 0
var userClicks=false;
var firstClick=false;
var init
var quizQuestions = [
    //#0 in the quizQuestions array
    {
        question: "Each year, the Chicago river is dyed what color to celebrate St. Patricks day?",
        answers: ["a. orange", "b. green", "c. it dosen't need to be dyed it is beautiul the way it is", "d. purple"],
        correct: "b. green",

    },

    //#1 in the quizQuestions array
    {
        question: "What animal cursed the Chicago cubs baseball team until they won the World Series 2016?",
        answers: ["a. fox", "b. pony", "c. squid", "d. goat"],
        correct: "d. goat",


    },

    //#2 in the quizQuestions array
    {
        question: "Besides deep-dish pizza, what cuisine is Chicago famous for?",
        answers: ["a. Hot dogs", "b. Italian beef sandwiches", "c. Brownies", "d. All of the above"],
        correct: "d. All of the above",
    }
]


//functions
//makes the clock count down 
function countDown() {
    var clock = 5;
    var timer = setInterval(function () {
        clock--;
        $('#timeLeft').html(clock);
        if (clock === 5) {
            $('#timeLeft').html(clock - 1);
        } else if (clock <= 0) {
            clearInterval(timer);
            $("#timeLeft").html("times up!");
        }
        console.log("I am the clock " + clock);
    }, 1000);
    console.log("hello")
}//end countDown function

function quizInit() {
    //clicking start button makes the countdown start 
    $("#quizStart").html("<h2>Click start to test your knowledge!</h2>")   
    $("#startButton").on("click", function () {
        getQuestion();
        clearInterval(setIntervalID)
        setIntervalID = setInterval(getQuestion, 11000);

    });

}//end quizInit function

function getQuestion() {
    //"this" references the objects containing the trivia questions. Current question assigns it a value of 0. 
    // so, taking quiz questions making it number 0, and diving into the object to get the question and putting it in 
    // the quizHolder div.  
    $("#quizHolder").html("<h2>" + quizQuestions[this.currentQuestion].question + "</h2>")
    for (var i = 0; i < quizQuestions[this.currentQuestion].answers.length; i++) {
        $("#quizHolder").append($("<p><button class='answerbutton'>" + quizQuestions[currentQuestion].answers[i] + '</button></p>'));
console.log(currentQuestion);
    }//end for loop inside of getQuestion
    nextQuestion();

}//end getQuestion function  

function nextQuestion() {
    if(userClicks===true){
    $(".answerbutton").one("click", function () {
        userClicks=false;
        firstClick=true;
        $("#quizHolder").empty();
        var clickanswer = $(this).text().toString().trim();
        var storeanswer = quizQuestions[currentQuestion].correct.toString().trim();
        console.log("I am the answer the user clicked " + clickanswer);
        alert( clickanswer +" - "+  storeanswer +" "+ clickanswer.localeCompare(storeanswer));
        if (clickanswer === storeanswer) {
            $(".responseText").append("You have answered correctly");
            correctAns++;
            console.log("score is " + correctAns);
            
            clearTimeout(setTimeoutID);
            setTimeoutID= setTimeout(getQuestion, 3000); 
        }
        else if(clickanswer !== storeanswer){
            $(".responseText").append("You have answered incorrectly");
            $(".AnsResponse").append("<embed src=https://media.giphy.com/media/PUeg2vZtk3T7G/giphy.gif width = '300px' height = '200px'/>");
            setTimeout(function() {
                $(".responseText").empty()
                $(".AnsResponse").empty()
                }, 2000);


        }

       else{ 
    noAnswer++;
    console.log("this many unanswered " + noAnswer);
    tryAgain();


        }
    });

    currentQuestion++;

}
}
  
function tryAgain(){
    $("#test").append($("<p><button class ='tryagain'>" +"try again" + "</buttton> </p>" ));
    $(".tryagain").on("click", function () {
        getQuestion();
        clearInterval(setIntervalID)
        setIntervalID = setInterval(getQuestion, 10000);
});
}
//end tryAgain





$(document).ready(function () {



    quizInit();



});// end document. ready function 
