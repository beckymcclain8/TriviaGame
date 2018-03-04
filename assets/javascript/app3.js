$(document).ready(function() {
  var userGuess;
  var questionNumber = 0;
  var right = 0;
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
    $("#start").html("start");
    $("#a").hide();
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
  }

  $("#start").on("click", function() {
    $("#start").hide();
    $("#t").show();
    $("#timer").show();
    countdown();
    $("#question").show();
    $("#question").text(currentQuestion[questionNumber].question);
    $("#a").show();
    $("#b").show();
    $("#c").show();
    $("#d").show();
    $("#a").html(currentQuestion[questionNumber].options[0]);
    $("#b").html(currentQuestion[questionNumber].options[1]);
    $("#c").html(currentQuestion[questionNumber].options[2]);
    $("#d").html(currentQuestion[questionNumber].options[3]);
  });

  $("#a").on("click", function() {
    clearInterval(timerId);
    stopTimer();
    userGuess = currentQuestion[questionNumber].options[0];
    if (userGuess === currentQuestion[questionNumber].correct) {
      correct();
    } else {
      incorrect();
    }
  });

  $("#b").on("click", function() {
    clearInterval(timerId);
    stopTimer();
    userGuess = currentQuestion[questionNumber].options[1];
    if (userGuess === currentQuestion[questionNumber].correct) {
      correct();
    } else {
      incorrect();
    }
  });

  $("#c").on("click", function() {
    clearInterval(timerId);
    stopTimer();
    userGuess = currentQuestion[questionNumber].options[2];
    if (userGuess === currentQuestion[questionNumber].correct) {
      correct();
    } else {
      incorrect();
    }
  });

  $("#d").on("click", function() {
    clearInterval(timerId);
    stopTimer();
    userGuess = currentQuestion[questionNumber].options[3];
    if (userGuess === currentQuestion[questionNumber].correct) {
      correct();
    } else {
      incorrect();
    }
  });

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
        currentQuestion[questionNumber].correct +
        "!"
    );
    $("#img").replaceWith('<img src="assets/images/Hedwig.jpg"/>');
    timedOut++;
  }

  function stopTimer() {
    $("#t").hide();
    $("#timer").hide();
  }

  function correct() {
    $("#question").text("CORRECT!");
    $("#img").replaceWith('<img src="assets/images/Hedwig.jpg"/>');
    questionNumber++;
    right++;
    nextQuestion();
  }

  function incorrect() {
    $("#question").text(
      "Nope!  The correct answer was " +
        currentQuestion[questionNumber].correct +
        "!"
    );
    $("#img").html('<img src="assets/images/Hedwig.jpg"/>');
    questionNumber++;
    wrong++;
    // nextQuestion();
  }
  // console.log("correct" + correct)
  // console.log("wrong" + wrong);
  // console.log("questionNumber" + questionNumber);

  function nextQuestion() {
    if (questionNumber < 3) {
      $("#t").show();
      $("#timer").show();
      countdown();
      $("#question").show();
      for (i = 0; i < 3; i++) {
        $("#question").text(currentQuestion[questionNumber].question);
        $("#answers");
        $("#a").show();
        $("#b").show();
        $("#c").show();
        $("#d").show();
        $("#a").html(currentQuestion[questionNumber].options[0]);
        $("#b").html(currentQuestion[questionNumber].options[1]);
        $("#c").html(currentQuestion[questionNumber].options[2]);
        $("#d").html(currentQuestion[questionNumber].options[3]);
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

  startGame();
});
