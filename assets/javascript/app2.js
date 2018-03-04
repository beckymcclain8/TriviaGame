$(document).ready(function() {
  var userGuess;
  var questionNumber = 0;
  var correct = 0;
  var wrong = 0;
  var timedOut = 0;

  currentQuestion = [
    {
      question: "What kind of pet does Harry take to school?",
      options: ["Frog", "Cat", "Owl", "Snake"],
      correct: "Owl"
    },
    {
      question: "What position does Harry play on the quidditch team?",
      options: ["Seeker", "Chaser", "Beater", "Bludger"],
      correct: "Seeker"
    },
    {
      question: "Which of the following was not a pet of Hagrid's",
      options: ["Norbert", "Chester", "Fang", "Buckbeak"],
      correct: "Chester"
    }
  ];

  function startGame() {
    $("#t").hide();
    $("#question").hide();
    $("#a").html("start");
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
  }

  $("#a").on("click", function() {
    $("#t").show();
    $("#timer").show();
    countdown();
    $("#question").show();
    $("#question").text(currentQuestion[0].question);
    $("#b").show();
    $("#c").show();
    $("#d").show();
    $("#a").html(currentQuestion[0].options[0]);
    $("#b").html(currentQuestion[0].options[1]);
    $("#c").html(currentQuestion[0].options[2]);
    $("#d").html(currentQuestion[0].options[3]);

    $("#a").on("click", function() {
      userGuess = currentQuestion[0].options[0];
       checkWin();
    });

    $("#b").on("click", function() {
      userGuess = currentQuestion[0].options[1];
         checkWin();
    });

    $("#c").on("click", function() {
      userGuess = currentQuestion[0].options[2];
      checkWin();
    });

    $("#d").on("click", function() {
      userGuess = currentQuestion[0].options[3];
      checkWin();
    });
  });

  startGame();
  // setTimeout(checkWin, 5000);

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

  function ranOutOfTime() {
    $("#question").text(
      "Sorry, you ran out of time!  The correct answer was " +
        currentQuestion[0].correct +
        "!"
    );
    $("#img").replaceWith('<img src="assets/images/Hedwig.jpg"/>');
    timedOut++;
  }

  function stopTimer() {
    $("#t").hide();
    $("#timer").hide();
  }

  function checkWin() {
    clearInterval(timerId);
    stopTimer();
    if (userGuess === currentQuestion[0].correct) {
      $("#question").text("CORRECT!");
      $("#img").replaceWith('<img src="assets/images/Hedwig.jpg"/>');
      questionNumber++;
      correct++;
      nextQuestion();
    } else {
      $("#question").text(
        "Nope!  The correct answer was " + currentQuestion[0].correct + "!"
      );
      $("#img").html('<img src="assets/images/Hedwig.jpg"/>');
      questionNumber++;
      wrong++;
      nextQuestion();
    }
    console.log("correct" + correct)
    console.log("wrong" + wrong);
    console.log("questionNumber" + questionNumber);
  }
  

  function nextQuestion() {
    if (questionNumber < 3) {
      $("#t").show();
      $("#timer").show();
      countdown();
      $("#question").show();
      for (i = 0; i < 3; i++) {
        $("#question").text(currentQuestion[i].question);
        $("#answers")
        $("#b").show();
        $("#c").show();
        $("#d").show();
        $("#a").html(currentQuestion[i].options[0]);
        $("#b").html(currentQuestion[i].options[1]);
        $("#c").html(currentQuestion[i].options[2]);
        $("#d").html(currentQuestion[i].options[3]);
      }
    } else {
      results();
    }
  }

  function results() {
    $("#results").html(
      "<p>Total Correct:" +
        correct +
        "</p>" +
        "<br>" +
        "<p>Total Wrong:" +
        wrong +
        "</p>" +
        "<br>" +
        "<p>Ran out of time on:" +
        timedOut +
        "</p>" +
        "<br>" +
        "<div>'restart button'</div>"
    );
  }
});
