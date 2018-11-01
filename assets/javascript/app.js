//global variables

var score = 0;
var answers = [];
var correctAns = 0;
var incorrectAns = 0;
var useranswer
var questionContainer
var currentQuestion = 0;
var setIntervalID;
var setTimeoutID;
var timer = 0
var clock = 31
var arrayIndex = 0
var userClicks=false;
var init
var quizQuestions = [
    //#0 in the quizQuestions array
    {
        question: "Each year, the Chicago river is dyed what color to celebrate St. Patricks day?",
        answers: ["a. orange", "b. green", "c. it dosen't need to be dyed it is beautiul the way it is", "d. purple"],
        correct: "b. green"
    },

    //#1 in the quizQuestions array
    {
        question: "What animal cursed the Chicago cubs baseball team until they won the World Series 2016?",
        answers: ["a. fox", "b. pony", "c. squid", "d. goat"],
        correct: "d. goat",


    },

    //#3 in the quizQuestions array
    {
        question: "Besides deep dish pizza, what cuisine is Chicago famous for?",
        answers: ["a. Hot dogs", "b. Italian beef sandwiches", "c. Brownies", "d. All of the above"],
        correct: "d. goat",
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
    $("#startButton").on("click", function () {
        getQuestion();
        clearInterval(setIntervalID)
        setIntervalID = setInterval(getQuestion, 10000);
         $("#quizStart").html("<h2>Click start to test your knowledge!</h2>")

    });

}//end quizInit function

function getQuestion() {
    //"this" references the objects containing the trivia questions. Current question assigns it a value of 0. 
    // so, taking quiz questions making it number 0, and diving into the object to get the question and putting it in 
    // the quizHolder div.  
    $("#quizHolder").html("<h2>" + quizQuestions[this.currentQuestion].question + "</h2>")
    for (var i = 0; i < quizQuestions[this.currentQuestion].answers.length; i++) {
        $("#quizHolder").append($("<p><button class='answerbutton'>" + quizQuestions[currentQuestion].answers[i] + '</button></p>'));

    }//end for loop inside of getQuestion
    nextQuestion();

}//end getQuestion function  

function nextQuestion() {
    $(".answerbutton").on("click", function () {
        userClicks=true;
        $("#quizHolder").empty();
        var clickanswer = $(this).text().toString().trim()
        var storeanswer = quizQuestions[currentQuestion].correct.toString().trim();
        console.log("I am the answer the user clicked " + clickanswer);
        // alert( clickanswer +" - "+  storeanswer +" "+ clickanswer.localeCompare(storeanswer));
        if (clickanswer === storeanswer) {
            $("#test").append("You have answered correctly");
            correctAns++;
            console.log("score is " + correctAns);
            
            clearTimeout(setTimeoutID);
            setTimeoutID= setTimeout(getQuestion, 3000); 
        }
        else{
            $("#test").append("You have answered incorrectly");

        }


    });

    currentQuestion++;
}





function checkAnswers() {
    $(".answerButton").on("click", function () {
        console.log("dosomething")
        useranswer = $(".answerButton").text();

        console.log("this is the user answer inside of the  function " + useranswer)

    });

}

console.log("this is the user answer " + useranswer);


// function quizReset(){}

//function showAnswers (){}
// showAnswers will clear out the quiz from the screen and show the user 

//end functions

$(document).ready(function () {

    //checkAnswers();

    quizInit();

    //nextQuestion();
    //puts first quiz question on to page, iterates through array of answers and displays them with select buttons
    // $("#quizHolder").append(question_1.question);
    // for(var i = 0; i < question_1.answers.length; i++){

    // $("#answerHolder").append($('<input type="radio" name="quizButton" value="' + question_1.answers[i] + '" checked>' + question_1.answers[i] + '</input><br />'));
    // }
    //  checkAnswers();
    //  if (useranswer===this.correct){
    //   correctAns++;
    //  }else{
    //    incorrectAns++;
    //  }
    //need an if stataement to validate user answer input with user answer and increment correct if corrrect 
    //and increment incorrect 
    console.log("this is the user answer" + useranswer);
    // console.log("the correct answer is " + question_1.correct);
    console.log("you have this many right " + correctAns)
    console.log("you have this many wrong" + incorrectAns)



});// end document. ready function 
