$(document).ready(function() {


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
        for (var i = 0; i < 1; i++) {
          $("#question").html(questArray[0].questionText);
          $("#b").show();
          $("#c").show();
          $("#d").show();
          $("#a").html(questArray[0].ansArray[0].answerA);
          $("#b").html(questArray[0].ansArray[0].answerB);
          $("#c").html(questArray[0].ansArray[0].answerC);
          $("#d").html(questArray[0].ansArray[0].answerD);
        }
    
        $("#a").on("click", function() {
          if ("#a" === correctAnswer[i]) {
            console.log("yes!");
            correct();
          } else {
            console.log("no!");
            wrong();
          }
        });

        var questArray = [question1, question2, question3]

  var questions = [
      {
    question1Text: "What kind of pet does Harry take to school?",
    ans1Array: [
      {
        answerA: "Frog",
        isRight: false
      },
      {
        answerB: "Cat",
        isRight: false
      },
      {
        answerC: "Owl",
        isRight: true
      },
      {
        answerD: "Snake",
        isRight: false
      }
    ],
    imgSrc: "assets/images/Hedwig.jpg"
      },

{
    question2Text: "What position does Harry play on the quidditch team?",
    ans2Array: [
      {
        answerA: "Seeker",
        isRight: true
      },
      {
        answerB: "Chaser",
        isRight: false
      },
      {
        answerC: "Beater",
        isRight: false
      },
      {
        answerD: "Bludger",
        isRight: false
      }
    ],
    imgSrc: "assets/images/Hedwig.jpg"
  },
{
      question3Text: "Which of the following was not a pet of Hagrid's",
    ans3Array: [
      {
        answerA: "Norbert",
        isRight: false
      },
      {
        answerB: "Chester",
        isRight: true
      },
      {
        answerC: "Fang",
        isRight: false
      },
      {
        answerD: "Buckbeak",
        isRight: false
      }
    ],
    imgSrc: "assets/images/Hedwig.jpg"
  }]

    });

    startGame();
});

