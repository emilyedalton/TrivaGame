//global variables

var score = 0;
var answers = [];
var correctAns = 0;
var incorrectAns = 0;
var noAnswer = 0;
var useranswer;
var questionContainer;
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
// {
//         question: "Besides deep-dish pizza, what cuisine is Chicago famous for?",
//         answers: ["a. Hot dogs", "b. Italian beef sandwiches", "c. Brownies", "d. All of the above"],
//         correct: "d. All of the above",
//         winGif: "https://media.giphy.com/media/Y3z0KLoRaZrJm/giphy.gif"
//     }
]
//Emily, You need document ready to ensure that HTML elements loads first before running jquery
$(document).ready(function () {

    //Emily, this resets the game
    function resetGame() {



        $(".AnsResponse").empty();
        $("#quizHolder").empty();
        $("#test").empty();
        $("#quizHolder").append("<p>Answered:" + correctAns + "</p>");
        $("#quizHolder").append("<p>Incorrect answered:" + incorrectAns + "</p>");
        $("#quizHolder").append("<p>No Answered:" + noAnswer + "</p>");

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
    //Emily, you need to have the clock count down to start at 10seconds
    function countDown() {
        if(userClicks===true)
        {
            clock=11;
        }
        clock--;
        $("#timeLeft").html("<p>Remaining Time:" + clock + "</p>");
        // alert("init"+init);


        //Emily, init is set true so when you click start it would display the question right away
        if (clock === 0 || init === true) {

            getQuestion();

            //Emily, this would use the setinterval to continously loop using the every 10 sec
            init = false;
        }


    }//end countDown function

    function quizInit() {
        //clicking start button makes the countdown start 
        $("#quizStart").html("<h2>Click start to test your knowledge!</h2>")
        $("#startButton").on("click", function () {


            //Emily, this reset when it starts using the setinterval
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
        //"this" references the objects containing the trivia questions. Current question assigns it a value of 0. 
        // so, taking quiz questions making it number 0, and diving into the object to get the question and putting it in 
        // the quizHolder div.  

      





         


        //Emily, when the clock reaches 0, it goes to the next question 
 
        if (clock === 0) {

            currentQuestion++;


            timeup = true;
            clock = 11;
            console.log("next question currentQuestion:" + currentQuestion + " quizQuestions.length: " + quizQuestions.length);
            
        }
        //Emily, if the user doesn't click, it increments no answer        
        if (userClicks === false && init === false) {

            noAnswer++;
            console.log("this many unanswered " + noAnswer + "user click" + userClicks);
            clock = 11;
        }
        //Emily, if currentQuestion reaches the last element of the quizQuestion, it would reset the game
        if (currentQuestion === quizQuestions.length) {
             console.log("resetgame");
            resetGame();

        }//Emily, if it doesn't reach the end of the quizQuestions Array it will continuously go to the next question
        else if (currentQuestion < quizQuestions.length) {
           // $(".AnsResponse").empty();
            $(".AnsResponse").empty();
            $("#quizHolder").html("<h2>" + quizQuestions[currentQuestion].question + "</h2>")

            for (var i = 0; i < quizQuestions[currentQuestion].answers.length; i++) {
                $("#quizHolder").append($("<p><button class='answerbutton'>" + quizQuestions[currentQuestion].answers[i] + '</button></p>'));
                console.log([quizQuestions]);
            }//end for loop inside of getQuestion
 
            //Emily, it stores the right answer here, so it can be used to compare with the answer button click
            storeanswer = quizQuestions[currentQuestion].correct.toString().trim();
            storeGif=quizQuestions[currentQuestion].winGif;

            nextQuestion();



        }

        //}





    }//end getQuestion function  

    function nextQuestion() {


        //Emily, this reset the userClicks after the user clicks the answer
        userClicks = false;

        $(".answerbutton").on("click", function () {


            $("#quizHolder").empty();
            clickanswer = $(this).text().toString().trim();

           
            //Emily, if the user clicks the right answer it increments the answer count
            //and display the message you have answered correctly.
           if (clickanswer === storeanswer) {
                $("#test").empty();
                $("#test").append("You have answered correctly");
                correctAns++;
                console.log("score is " + correctAns);
                $(".AnsResponse").append("<embed src='"+storeGif+ "' width = '300px' height = '200px'/>");
                currentQuestion++;
                clock = 11;
                userClicks = true;
                clearTimeout(setTimeoutID);
                setTimeoutID = setTimeout(getQuestion, 3000);


            } //Emily, this displays the wrong answer after the user clicks the answer button
            else if (clickanswer !== storeanswer) {
                $(".AnsResponse").empty();
                $("#test").append("You have answered incorrectly");
                incorrectAns++;
                currentQuestion++;
                clock = 11;
                userClicks = true;
                $(".AnsResponse").append("<h2>" + "DENIED"+ "</h2>"+"<embed src='https://media.giphy.com/media/PUeg2vZtk3T7G/giphy.gif' width = '300px' height = '200px'/>");
                clearTimeout(setTimeoutID);
                setTimeoutID = setTimeout(getQuestion, 3000);
               
                // setTimeout(function() {
                //     $(".responseText").hide()
                //     $(".AnsResponse").hide()
                //     }, 4000);

            }




        });
        
    }

   //Emily. this starts the game
    quizInit();





});// end document. ready function 