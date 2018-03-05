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
      correct: "Owl",
      img: "<img src='assets/images/Hedwig.jpg'/>"
    },
    {
      question: "What position does Harry play on the quidditch team?",
      options: ["Seeker", "Chaser", "Beater", "Bludger"],
      correct: "Seeker",
      img: "<img src='assets/images/seeker.png'/>"
    },
    {
      question: "Which of the following was not a pet of Hagrid's",
      options: ["Norbert", "Chester", "Fang", "Buckbeak"],
      correct: "Chester",
      img: "<img src='assets/images/buckbeak.jpg'/>"
    },
    {
      question: "What article of clothing frees Dobby from the Malfoys?",
      options: ["Shirt", "Scarf", "Sock", "Sweater"],
      correct: "Sock",
      img: "<img src='assets/images/dobby.jpg'/>"
    },
    {
      question: "Who drives the Knight Bus?",
      options: ["Bertha Jorkins", "Mundungus Fletcher", "Dedalus Diggle", "Stan Shunpike"],
      correct: "Stan Shunpike",
      img: "<img src='assets/images/stan.jpg'/>"
    },
    {
      question: "What kind of drgaon did Harry fight in the Tri-Wizard Tournament?",
      options: ["Welsh-Green", "Hungarian Horntail", "Swedish Short-Snout", "Chinese Fireball"],
      correct: "Hungarian Horntail",
      img: "<img src='assets/images/hungarian.jpg'/>"
    },
    {
      question: "What was James Potter's animagus?",
      options: ["Stag", "Rat", "Dog", "Cat"],
      correct: "Stag",
      img: "<img src='assets/images/prongs.jpg'/>"
    },
    {
      question: "Who was the half-blood prince?",
      options: ["James Potter", "Albus Dumbledore", "Tom Riddle", "Severus Snape"],
      correct: "Severus Snape",
      img: "<img src='assets/images/snape.jpg'/>"
    },
    {
      question: "What newspaper does Luna Lovegood's dad edit?",
      options: ["The Muggle Mornings", "The Daily Prophet", "The Quibbler", "Diagon Alley News"],
      correct: "The Quibbler",
      img: "<img src='assets/images/quibbler.jpg'/>"
    },
    {
      question: "Which of the following is not a Weasley?",
      options: ["Frank", "Molly", "Bill", "Charlie"],
      correct: "Frank",
      img: "<img src='assets/images/weasley.jpg'/>"
    },
  ];

  function startGame() {
    $("#t").hide();
    $("#question").hide();
    $("#start").html("start");
    $("#a").hide();
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
    clearInterval(timerId);
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

  var timeLeft = 3;
  var elem = document.getElementById("timer");
  var timerId = setInterval(countdown, 1000);

 
  function ranOutOfTime() {
    $("#a").hide();
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
    $("#question").text(
      "Sorry, you ran out of time!  The correct answer was " +
        currentQuestion[questionNumber].correct +
        "!"
    );
    $("#img").replaceWith(currentQuestion[questionNumber].img);
    questionNumber;
    timedOut++;
    setTimeout(nextQuestion, 4000);
  }

  function stopTimer() {
    $("#t").hide();
    $("#timer").hide();
  }

  function correct() {
    $("#a").hide();
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
    $("#question").text("CORRECT!");
    $("#img").replaceWith(currentQuestion[questionNumber].img);
    questionNumber++;
    right++;
    setTimeout(nextQuestion, 4000);
  }

  function incorrect() {
    $("#a").hide();
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
    $("#question").text(
      "Nope!  The correct answer was " +
        currentQuestion[questionNumber].correct +
        "!"
    );
    $("#img").html(currentQuestion[questionNumber].img);
    questionNumber++;
    wrong++;
    setTimeout(nextQuestion, 4000);
  }
  // console.log("correct" + correct)
  // console.log("wrong" + wrong);
  // console.log("questionNumber" + questionNumber);

  function nextQuestion() {
    if (questionNumber < 10) {
      $("#img").hide();
      $("#t").show();
      $("#timer").show();
      timeLeft = 3;
      countdown();
      $("#question").show();
      for (i = 0; i < 10; i++) {
        
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
  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      ranOutOfTime();
    } else {
      elem.innerHTML = timeLeft + " seconds remaining";
      timeLeft--;
    }
  }

  function results() {
    $("#img").hide();
    $("#question").hide();
    $("#a").hide();
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
    $("#results").html(
      "<p>Total Correct: " +
        right +
        "</p>" +
        "<br>" +
        "<p>Total Wrong: " +
        wrong +
        "</p>" +
        "<br>" +
        "<p>Ran out of time on: " +
        timedOut +
        "</p>" +
        "<br>" +
        "<div>'restart button'</div>"
    );
  }

  startGame();
});
