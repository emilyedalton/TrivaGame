//global variables

var score = 0;
var answers= [];
var correct= 0;
var incorrect = 0; 
var useranswer 
var timer =0
var clock = 30

var quizQuestions = [
    question_1 = {
        question:"Each year, the Chicago river is dyed what color to celebrate St. Patricks day?",
        answers: ["a. orange", "b. green", "c. it dosen't need to be dyed it is beautiul the way it is", "d. purple"],
        correct: "b. green"


    }
]


//functions

function countDown(){
    var clock = 30;
   var timer = setInterval(function() {
        clock--;
       $('#timeLeft').html(clock);
        if (clock === 30) {
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
$("#startButton").on("click", countDown())
$("#quizStart").html("<h2>Click start to test your knowledge!</h2>")


}//end quizInit function

 function checkAnswers(){
     $("input").on("click", function(){
      $("#test").html ($("input:checked").val());
      var useranswer = $(this).val();
    
    console.log("this is the user answer " + useranswer);
});

 }

  // end quizAnswers function

// function quizReset(){





// end quizReset function
//end functions

 $(document).ready(function(){



quizInit();

//puts first quiz question on to page, iterates through array of answers and prints them with select buttons
$("#quizHolder").append(question_1.question);
for(var i = 0; i < question_1.answers.length; i++){

$("#answerHolder").append($('<input type="radio" name="greetings" value="' + question_1.answers[i] + '" checked>' + question_1.answers[i] + '</input><br />'));
}
checkAnswers();
if (useranswer===question_1.correct){
    correct++
}
console.log("this is the user answer" + useranswer);
console.log("the correct answer is " + question_1.correct);
//an array of question objects
// for (var i =0; i< quizQuestions.length; i++);
// {
// var response = prompt(quizQuestions[i]);
// if (response === quizQuestions[i].answers){
// score ++;
// alert ("correct");
// }// end if statement 
// else {
// alert("incorrect")
// } // end else statement 
// }//end for loop

// quizInit();

 });// end document. ready function 