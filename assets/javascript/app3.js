$(document).ready(function() {
  var userGuess;
  var questionNumber = 0;
  var right = 0;
  var wrong = 0;
  var timedOut = 0;

  //Array of objects holding questions, answer options, correct answer, and the image to be displayed.
  currentQuestion = [
    {
      question: "What kind of pet does Harry take to school?",
      options: ["Frog", "Cat", "Owl", "Snake"],
      correct: "Owl",
      img: "<img id='img' src='assets/images/Hedwig.jpg'/>"
    },
    {
      question: "What position does Harry play on the quidditch team?",
      options: ["Seeker", "Chaser", "Beater", "Bludger"],
      correct: "Seeker",
      img: "<img id='img' src='assets/images/seeker.png'/>"
    },
    {
      question: "Which of the following was not a pet of Hagrid's",
      options: ["Norbert", "Chester", "Fang", "Buckbeak"],
      correct: "Chester",
      img: "<img id='img' src='assets/images/buckbeak.jpg'/>"
    },
    {
      question: "What article of clothing frees Dobby from the Malfoys?",
      options: ["Shirt", "Scarf", "Sock", "Sweater"],
      correct: "Sock",
      img: "<img id='img' src='assets/images/dobby.jpg'/>"
    },
    {
      question: "Who drives the Knight Bus?",
      options: [
        "Bertha Jorkins",
        "Mundungus Fletcher",
        "Dedalus Diggle",
        "Stan Shunpike"
      ],
      correct: "Stan Shunpike",
      img: "<img id='img' src='assets/images/stan.jpg'/>"
    },
    {
      question:
        "What kind of drgaon did Harry fight in the Tri-Wizard Tournament?",
      options: [
        "Welsh-Green",
        "Hungarian Horntail",
        "Swedish Short-Snout",
        "Chinese Fireball"
      ],
      correct: "Hungarian Horntail",
      img: "<img id='img' src='assets/images/hungarian.jpg'/>"
    },
    {
      question: "What was James Potter's animagus?",
      options: ["Stag", "Rat", "Dog", "Cat"],
      correct: "Stag",
      img: "<img id='img' src='assets/images/prongs.jpg'/>"
    },
    {
      question: "Who was the half-blood prince?",
      options: [
        "James Potter",
        "Albus Dumbledore",
        "Tom Riddle",
        "Severus Snape"
      ],
      correct: "Severus Snape",
      img: "<img id='img' src='assets/images/snape.jpg'/>"
    },
    {
      question: "What newspaper does Luna Lovegood's dad edit?",
      options: [
        "The Muggle Mornings",
        "The Daily Prophet",
        "The Quibbler",
        "Diagon Alley News"
      ],
      correct: "The Quibbler",
      img: "<img id='img' src='assets/images/quibbler.jpg'/>"
    },
    {
      question: "Which of the following is not a Weasley?",
      options: ["Frank", "Molly", "Bill", "Charlie"],
      correct: "Frank",
      img: "<img id='img' src='assets/images/weasley.jpg'/>"
    }
  ];

  //opening screen
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

  //Once the user clicks start, the first question and answers will be displayed
  $("#start").on("click", function() {
    $("#start").hide();
    $("#t").show();
    $("#timer").show();
    timerId = setInterval(countdown, 1000);
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

  //if "a" is clicked stop the time, decide if it's right or wrong (same thing repeated for each button option)
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

  //timer countdown
  var timeLeft = 3;
  //grabbing the DOM element "timer" and saving it as a variable
  var elem = document.getElementById("timer");
  //creating and setting a variable called timerId so that I can stop it and start it later
  var timerId;
  

  // function count() {
  //   timeLeft--;
  // }

  //countDown function for the timer... if timeLeft === 0 it should stop the clock and run "ran out of time" function, otherwise it should subtract a second from timeLeft, updating the DOM.
  function countdown() {
    if (timeLeft === 0) {
      clearInterval(timerId);
      elem.innerHTML = timeLeft + " seconds remaining"; 
      ranOutOfTime();
    } else {
      elem.innerHTML = timeLeft + " seconds remaining";
      timeLeft--;
    }
  }
  //function to display when the user runs out of time.  It should stop the timer, hide the buttons, display a imgture and and let them know they ran out of time and what the correct answer was.
  function ranOutOfTime() {
    clearInterval(timerId);
    $("#a").hide();
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
    $("#question").text(
      "Sorry, you ran out of time!  The correct answer was " +
        currentQuestion[questionNumber].correct +
        "!"
    );
    // $("#img").show();
    $("#img").replaceWith(currentQuestion[questionNumber].img);
    questionNumber++;
    timedOut++;
    setTimeout(nextQuestion, 4000);
  }

  //this function hides the timer during the "correct/incorrect/out of time" update
  function stopTimer() {
    $("#t").hide();
    $("#timer").hide();
  }

  //function to display when the user answers correctly.
  function correct() {
    clearInterval(timerId);
    $("#a").hide();
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
    $("#question").text("CORRECT!");
    // $("#img").show();
    $("#img").replaceWith(currentQuestion[questionNumber].img);
    questionNumber++;
    console.log("correct" + questionNumber);
    right++;
    setTimeout(nextQuestion, 4000);
  }

  //functiuon to display when the user answers incorrectly.
  function incorrect() {
    clearInterval(timerId);
    $("#a").hide();
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
    $("#question").text(
      "Nope!  The correct answer was " +
        currentQuestion[questionNumber].correct +
        "!"
    );
    // $("#img").show();
    $("#img").replaceWith(currentQuestion[questionNumber].img);
    questionNumber++;
    wrong++;
    setTimeout(nextQuestion, 4000);
  }

  // This function should hide the old imgture and bring up the next question and answers.
  function nextQuestion() {
    if (questionNumber < 10) {
      console.log("nextQuestion" + questionNumber);
      $("#img").hide();
      $("#t").show();
      $("#timer").show();
      timeLeft = 3;
      timerId = setInterval(countdown, 1000);
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

  //This function displays the results of the game along with a button to restart the game.
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
        "<btn>'Restart The Game'</btn>"
    );
  }

  //function to retart the game.  Resets variables to 0 and runs the "startGame" function
  function restartButton() {
    var questionNumber = 0;
    var right = 0;
    var wrong = 0;
    var timedOut = 0;
    startGame();
  }

  startGame();
});
