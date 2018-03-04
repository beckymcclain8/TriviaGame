$(document).ready(function() {
  // var userGuess;
  var currentQuestion = 0;

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
    //write code to begin timer

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
      userGuess = (currentQuestion[0].options[0]);
      stopTimer();
      checkWin();
      currentQuestion++;
    });

    $("#b").on("click", function() {
      userGuess = (currentQuestion[0].options[1]);
      stopTimer();
      checkWin();
      currentQuestion++;
    });

    $("#c").on("click", function() {
      userGuess = (currentQuestion[0].options[2]);
      stopTimer();
      checkWin();
      currentQuestion++;
    });

    $("#d").on("click", function() {
      userGuess = (currentQuestion[0].options[3]);
      stopTimer();
      checkWin();
      currentQuestion++;
    });
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

  function ranOutOfTime() {
    $("#question").text(
      "Sorry, you ran out of time!  The correct answer was " +
        currentQuestion[0].correct +
        "!"
    );
    $("#answers").replaceWith('<img src="assets/images/Hedwig.jpg"/>');
  }

  function stopTimer() {
    $("#t").hide();
    $("#timer").hide();
  }

  function checkWin() {
    // function fiveSeconds(){
    if (userGuess === currentQuestion[0].correct) {
      $("#question").text("CORRECT!");
      $("#answers").replaceWith('<img src="assets/images/Hedwig.jpg"/>');
    } else {
      $("#question").text(
        "Nope!  The correct answer was " + currentQuestion[0].correct + "!"
      );
      $("#answers").replaceWith('<img src="assets/images/Hedwig.jpg"/>');
    }
    // setTimeout(fiveSeconds, 1000 *5);
  }
});
