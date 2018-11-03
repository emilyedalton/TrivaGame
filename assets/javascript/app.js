//global variables

var score = 0;
var answers = [];
var correctAns = 0;
var incorrectAns = 0;
var noAnswer = 0;
var currentQuestion = 0;
var setIntervalID;
var setTimeoutID;
var timer = 0;
var clock = 11;
var arrayIndex = 0;
var userClicks = false;
var init = true;
var setReset = false;
var timeup = false;
var clickanswer = "";
var storeanswer = "";
var storeGif="";
var initialAnswerButton = true;
var quizQuestions = [
    {
    //#0 in the quizQuestions array
    question: "Each year, the Chicago river is dyed what color to celebrate St. Patricks day?",
        answers: ["a. orange", "b. green", "c. it dosen't need to be dyed it is beautiul the way it is", "d. purple"],
        correct: "b. green",
        winGif: "https://media.giphy.com/media/3mknz2HlygEne/giphy.gif"

    },

    //#1 in the quizQuestions array
    {
        question: "What animal cursed the Chicago cubs baseball team until they won the World Series 2016?",
        answers: ["a. fox", "b. pony", "c. squid", "d. goat"],
        correct: "d. goat",
        winGif: "https://media.giphy.com/media/l2SpNtHdgOA9s1qNy/giphy.gif"

        
    },

    //#3 in the quizQuestions array
    {
        question: "Besides deep-dish pizza, what cuisine is Chicago famous for?",
        answers: ["a. Hot dogs", "b. Italian beef sandwiches", "c. Brownies", "d. All of the above"],
        correct: "d. All of the above",
        winGif: "https://media.giphy.com/media/Y3z0KLoRaZrJm/giphy.gif"
    }

]
$(document).ready(function () {

    //Game Reset
    function resetGame() {

        $(".AnsResponse").empty();
        $("#quizHolder").empty();
        $("#test").empty();
        $("#quizHolder").html(`<p> Number Right: ${correctAns} </p> <p> Number Wrong: ${incorrectAns}</p> <p> No Answer: ${noAnswer}</p>`);


        currentQuestion = 0;
        correctAns = 0;
        incorrectAns = 0;
        noAnswer = 0;

        setReset = true;
        timeup = false;
        clock = 11;
        clearInterval(setIntervalID);
        clearTimeout(setTimeoutID);



    }

    //functions
    //Countdown: If the user clicks, start the countdown
    function countDown() {
        if(userClicks===true)
        {
            clock=11;
        }
        clock--;
        $("#timeLeft").html("<p>Remaining Time:" + clock + "</p>");


        //Either time runs out or the inital start of the game = "true" BUT after you get the question it becomes false 
        if (clock === 0 || init === true) {

            getQuestion();

            init = false;
        }


    }//end countDown function

    function quizInit() {
        //clicking start button makes the countdown start 
        $("#quizStart").html("<h1>Chicago Style Trivia</h1>")
        $("#startButton").on("click", function () {


            //Resets the setinterval
            init = true;
            clock = 11;
            setReset = false;
            $("#quizHolder").empty();
            $("#test").empty();
            
            clearInterval(setIntervalID)
            setIntervalID = setInterval(countDown, 1000);



        });

    }//end quizInit function

    function getQuestion() {
        

        //If the clock reaches 0, go to the next question 
 
        if (clock === 0) {

            currentQuestion++;


            timeup = true;
            clock = 11;
            console.log("next question currentQuestion:" + currentQuestion + " quizQuestions.length: " + quizQuestions.length);
            
        }
        //If the user doesn't click and        
        if (userClicks === false && init === false) {

            noAnswer++;
            console.log("this many unanswered " + noAnswer + "user click" + userClicks);
            clock = 11;
        }
        //When the last element of the quizQuestion, it resets the game
        if (currentQuestion === quizQuestions.length) {
             console.log("resetgame");
            resetGame();

        }//if it doesn't reach the end of the quizQuestions Array it will continuously go to the next question
        else if (currentQuestion < quizQuestions.length) {
            $(".AnsResponse").empty();
            $("#quizHolder").html(`<h2> ${quizQuestions[currentQuestion].question} <h2>`);
            for (var i = 0; i < quizQuestions[currentQuestion].answers.length; i++) {
                $("#quizHolder").append($("<p><button class='answerbutton'>" + quizQuestions[currentQuestion].answers[i] + '</button></p>'));
                console.log([quizQuestions]);
            }//end for loop inside of getQuestion
 
            //Stores the right answer so it can be used to compared with the answer button click
            storeanswer = quizQuestions[currentQuestion].correct.toString().trim();
            storeGif=quizQuestions[currentQuestion].winGif;

            nextQuestion();



        }

        //}





    }//end getQuestion function  

    function nextQuestion() {


        //This resets the userClicks after the user clicks the answer
        userClicks = false;

        $(".answerbutton").on("click", function () {


            $("#quizHolder").empty();
            clickanswer = $(this).text().toString().trim();

           
            //If the user clicks the right answer it increments the answer count
            //and displays the message you have answered correctly.
           if (clickanswer === storeanswer) {
                $("#test").empty();
                $("#test").append("You have answered correctly");
                correctAns++;
                console.log("score is " + correctAns);
                $(".AnsResponse").html(`<h2> ${quizQuestions[currentQuestion].question} <h2>`);
                $(".AnsResponse").append (`<h2> RIGHT </h2> <embed src=${storeGif} width = '300px' height = '200px'/>`);
                currentQuestion++;
                clock = 11;
                userClicks = true;
                clearTimeout(setTimeoutID);
                setTimeoutID = setTimeout(getQuestion, 4000);


            } //Displays the wrong answer after the user clicks the answer button
            else if (clickanswer !== storeanswer) {
                $(".AnsResponse").empty();
                incorrectAns++;
                currentQuestion++;
                clock = 11;
                userClicks = true;
                $(".AnsResponse").append("<h2>" + "DENIED"+ "</h2>"+"<embed src='https://media.giphy.com/media/PUeg2vZtk3T7G/giphy.gif' width = '300px' height = '200px'/>");
                clearTimeout(setTimeoutID);
                setTimeoutID = setTimeout(getQuestion, 4000);
               
              

            }




        });
        
    }

   //Starts the game
    quizInit();





});// end document. ready function 