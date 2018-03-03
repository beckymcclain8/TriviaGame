$(document).ready(function() {



  var currentQuestion = [
    {
      question: "What kind of pet does Harry take to school?",
      options: ["Frog", "Cat", "Owl", "Snake"],
      correct: 3
    },
    {
      question: "What position does Harry play on the quidditch team?",
      options: ["Seeker", "Chaser", "Beater", "Bludger"],
      correct: 1
    },
    {
      question: "Which of the following was not a pet of Hagrid's",
      options: ["Norbert", "Chester", "Fang", "Buckbeak"],
      correct: 2
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
    //for loop to display question and buttons that correlate
    $("#t").show();
    // countdown();
    $("#question").show();
    $("#question").replaceWith(currentQuestion[0].question);
    $("#b").show();
    $("#c").show();
    $("#d").show();
    $("#a").html(currentQuestion[0].options[0]);
    $("#b").html(currentQuestion[0].options[1]);
    $("#c").html(currentQuestion[0].options[2]);
    $("#d").html(currentQuestion[0].options[3]);

    $("#a").on("click", function() {
      
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

})