$(document).ready(function() {
  //create a timer that counts down each question 30 seconds
  // start screen with button to start game

  var question = [
    "What kind of pet does Harry take to school?",
    "What position does Harry play on the quidditch team?",
    "Which of the following was not a pet of Hagrid's"
  ];

  var answersA = ["frog", "Seeker", "Nobert"];
  var answersB = ["Cat", "Chaser", "Chester"];
  var answersC = ["Owl", "Beater", "Fang"];
  var answersD = ["Snake", "Bludger", "Buckbeak"];

  var correctAnswer = ["Owl", "Seeker", "Chester"];

  function startGame() {
    $("#t").hide();
    $("#question").hide();
    $("#a").html("start");
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
  }

  $("#a").on("click", function() {
    //write code to begin timer
    //for loop to display question and buttons that correlate
    $("#t").show();

    countdown();

    $("#question").show();
    $("#question").replaceWith(question[0]);
    $("#b").show();
    $("#c").show();
    $("#d").show();
    $("#a").html(answersA[0]);
    $("#b").html(answersB[0]);
    $("#c").html(answersC[0]);
    $("#d").html(answersD[0]);

    // for (var i = 0; i < 1; i++) {
    $("#a").on("click", function() {
      if (answersA[0] === correctAnswer[0]) {
        console.log("yes!");
        correct();
      } else {
        console.log("no!");
        wrong();
      }
    });

    $("#b").on("click", function() {
      if (answersB[0] === correctAnswer[0]) {
        console.log("yes!");
        correct();
      } else {
        console.log("no!");
        wrong();
      }
    });

    $("#c").on("click", function() {
      if (answersC[0] === correctAnswer[0]) {
        console.log("yes!");
        correct();
      } else {
        console.log("no!");
        wrong();
      }
    });

    $("#d").on("click", function() {
      if (answersD[0] === correctAnswer[0]) {
        console.log("yes!");
        correct();
      } else {
        console.log("no!");
        wrong();
      }
    });

    function correct() {
      stopTimer();
      setTimeout(fiveSeconds, 1000 *5);
      $("#question").text("CORRECT!");
      $("#answers").replaceWith('<img src="assets/images/Hedwig.jpg"/>');
    }

    function wrong() {
      // $("#question").text("Nope!  The correct answer was" + correctAnswer[i]).attr("display", "block");
      stopTimer();
      
      $("#question")
        .text("Nope!  The correct answer was " + correctAnswer[0] + " !")
        .attr("display", "block");
      $("#answers").replaceWith('<img src="assets/images/Hedwig.jpg"/>');
    
    }
  });


  startGame();

  var timeLeft = 10;
  var elem = document.getElementById("timer");

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      ranOutOfTime();
    } else {
      elem.innerHTML = timeLeft + " seconds remaining";
      timeLeft--;
    }
  }

  function ranOutOfTime () {
    $("#question").text("Sorry, you ran out of time!  The correct answer was " + correctAnswer[0] + " !");
    $("#answers").replaceWith('<img src="assets/images/Hedwig.jpg"/>');
  }

  function stopTimer() {
    $("#t").hide();
    $("#timer").hide();
  }

  setTimeout(fiveSeconds, 1000 *5);

  setTimeout(fiveSeconds, 1000 *5);

  
  // var intervalId;
  // var clockRunning= false;

  // var timer = {
  // time: 30,

  // reset: function () {
  // timer.time = 30;
  // $("#timer").text("0:30");
  // },

  // start: function () {
  // if (!clockRUnning) {
  // intervalId = setInterval(timer.count, 1000);
  // clockRunning = true;
  // }},

  // stop: function () {
  // clearInterval(intervalId);
  // clockRunning = false;
  // },

  // count: function () {
  // timer.time--;
  // },

  // }

  // });
});

//try to append many things at once ex- tRow.append(title, year, actors);
//tBody.append(tRow);

//   var question1 = {
//     questionText: "What kind of pet does Harry take to school?",
//     ansArray: [
//         {answerA: "Frog",
//         isRight: false},
//         {answerB: "Cat",
//         isRight: false},
//         {answerC: "Owl",
//         isRight: true},
//         {answerD: "Snake",
//         isRight: false},
//     ],
//     imgSrc: "assets/images/Hedwig.jpg",

// }
//make buttons clickable
//buttons need to correspond to correct answer/wrong answer
//   var answers = ["#c"];
//   var questions = [];

//   //correct answer- must show congratulations (maybe a video/picture) then display next question w/o user input

//   $("#a").on("click", function() {
//     if ("#a" === answers[0]) {
//       console.log("yes!");
//       correct();
//     } else {
//       console.log("no!");
//       wrong();
//     }
//   });

//   $("#b").on("click", function() {
//     if ("#b" === answers[0]) {
//       console.log("yes!");
//       correct();
//     } else {
//       console.log("no!");
//       wrong();
//     }
//   });

//   $("#c").on("click", function() {
//     if ("#c" === answers[0]) {
//       console.log("yes!");
//       correct();
//     } else {
//       console.log("no!");
//       wrong();
//     }
//   });

//   $("#d").on("click", function() {
//     if ("#d" === answers[0]) {
//       console.log("yes!");
//       correct();
//     } else {
//       console.log("no!");
//       wrong();
//     }
//   });

//   //wrong answer- tell them they're wrong, must show correct answer, then display next question
//   //ran out of time-  tell them out of time, display correct answer, then move on w/o input
//   //final screen show: number correct, number incorrect, and option to restart
// });

// console.log(ansArray[1]);
