//global variables
var quizQuestions = [];
var score = 0;
var answers= [];
var question;
var correct;
var question_1 = "";
//functions

// function quizInit(){
//     const output = []

// quizQuestions.forEach


//end quizInit function

// function quizAnswers(){



// } // end quizAnswers function

// function quizReset(){





// end quizReset function
//end functions

// $(document).ready(function(){





 quizQuestions = [
    question_1 = {
        question:"Each year, the Chicago river is dyed what color to celebrate St. Patricks day?",
        answers: ["a. orange", "b. green", "c. it dosen't need to be dyed it is beautiul the way it is", "d. purple"],
        correct: 2


    }
]
$("#quizHolder").append(question_1.question);
for(var i = 0; i < question_1.answers.length; i++){

$("#answerHolder").append("<label>"+ "<input type= radio>"+question_1.answers[i]+"</label>")}
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

// });// end document. ready function 