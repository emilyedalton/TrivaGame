//global variables

var score = 0;
var answers= [];
var correctAns= 0;
var incorrectAns = 0; 
var useranswer
var questionContainer
var currentQuestion = 0; 
var timer =0
var clock = 31
var arrayIndex = 0

var init
var quizQuestions = [
    //#0 in the quizQuestions array
       {
        question:"Each year, the Chicago river is dyed what color to celebrate St. Patricks day?",
        answers: ["a. orange", "b. green", "c. it dosen't need to be dyed it is beautiul the way it is", "d. purple"],
        correct: "b. green",


    },

   //#1 in the quizQuestions array
   {
        question:"What animal cursed the Chicago cubs baseball team until they won the World Series 2016?",
        answers: ["a. fox", "b. pony", "c. squid", "d. goat"],
        correct: "d. goat",


    },

    //#3 in the quizQuestions array
    {
        question:"Besides deep dish pizza, what cuisine is Chicago famous for?",
        answers: ["a. Hot dogs", "b. Italian beef sandwiches", "c. Brownies", "d. All of the above"],
        correct: "d. goat",
    }
]


//functions
//makes the clock count down 
function countDown(){
    var clock = 31;
   var timer = setInterval(function() {
        clock--;
       $('#timeLeft').html(clock);
        if (clock === 31) {
          $('#timeLeft').html(clock - 1);
        } else if(clock <= 0) {
           clearInterval(timer);
           $("#timeLeft").html("times up!");
 }
 console.log("I am the clock "+ clock);
      }, 1000);
console.log("hello")
}//end countDown function

function quizInit(){
   //clicking start button makes the countdown start    
    $("#startButton").on("click", countDown);

     $("#quizStart").html("<h2>Click start to test your knowledge!</h2>")
//call getQuestion function
    
}//end quizInit function

function getQuestion(){
    // countDown();
//sets interval 
//"this" references the objects containing the trivia questions. Current question assigns it a value of 0. 
// so, taking quiz questions making it number 0, and diving into the object to get the question and putting it in 
// the quizHolder div.  
$("#quizHolder").html("<h2>"+ quizQuestions[this.currentQuestion].question + "</h2>")
for (var i = 0; i < quizQuestions[this.currentQuestion].answers.length; i++) {
    $("#answerHolder").append($("<button input type = radio" + quizQuestions[currentQuestion].answers[i] + " value >" + quizQuestions[currentQuestion].answers[i]  + '</button>'));

}//end for loop inside of getQuestion
//gets it from array 

}//end getQuestion function

function nextQuestion(){
 $("#nextQuestion").on("click", function(){
    $("#answerHolder").empty()
    getQuestion(); 
    currentQuestion++;
});
}



 function checkAnswers(){
     $("input").on("click", function(){
     $("#test").html($("input:radio").val());
      useranswer = $('input:checked').val();

console.log("this is the user answer inside of the  function " + useranswer)
   
});

}

console.log("this is the user answer " + useranswer);


// function quizReset(){}

//function showAnswers (){}
// showAnswers will clear out the quiz from the screen and show the user 

//end functions

 $(document).ready(function(){

getQuestion();

quizInit();

nextQuestion();
//puts first quiz question on to page, iterates through array of answers and displays them with select buttons
// $("#quizHolder").append(question_1.question);
// for(var i = 0; i < question_1.answers.length; i++){

// $("#answerHolder").append($('<input type="radio" name="quizButton" value="' + question_1.answers[i] + '" checked>' + question_1.answers[i] + '</input><br />'));
// }
// checkAnswers();
// if (useranswer===this.correct){
//     correctAns++;
// }else{
//     incorrectAns++;
// }
 //need an if stataement to validate user answer input with user answer and increment correct if corrrect 
    //and increment incorrect 
console.log("this is the user answer" + useranswer);
// console.log("the correct answer is " + question_1.correct);
console.log("you have this many right " + correctAns)
console.log("you have this many wrong" + incorrectAns)



 });// end document. ready function 
 