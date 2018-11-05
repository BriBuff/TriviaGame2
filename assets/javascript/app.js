
var right = 0;
var wrong = 0;
var userAnswer
var time = 45;
var intervalId;
var timereset = 45;

$("#restart").hide();
$("#game").hide();

$("#start").on("click", timer);

$("#submit").on("click", endGame);

function timer () {
  clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#start").hide();
    $("#restart").hide();
    $("#game").show();
    game();
  }

  function decrement() {
    time--;
    $("#timer").html("<h2>Time Remaining: " + time + "</h2>");
    if (time === 0) {
      stop();
      endGame();
    };
  }

  function stop () {
    clearInterval(intervalId);
  }


  function game() {
          
    for(var i = 1; i <= 4; i++) {
    var radios = document.getElementsByName('que'+i);
    for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      right++;
     }
    }
    }
    // *Kept from first version. Something here, when deleted will stop the whole game from working.
    // Was unable to find what would stop it, so this is left in from version 1.
    
    // qA is the array of objects
    for (var i = 0; i < qA.length; i++) {

      // append questions to the page with radio button
    // when they click on the radio or submit question then run the if
      //This is where the questions should show up. 
      // Only the active code will show up on the page.
      // Also tried .each(), but it hasn't been working either.

      // $("#questions").append(qA[i].questions);
      // $("#possibleAs").append(qA[i].possibleAs);
      // $(qA).each(qa[i]);
      // var ques = $("<div>");
      //     ques.addClass("ques");
      //     var quest = qA[i].questions;
      //     quest.text(ques);
      //     $("#questions").append(ques);

      //   var possibleAns = $("<div>");
      //     possibleAns.addClass("possibleAns");
      //     var ans = qA[i].possibleAs;
      //     possibleAns.html("<insert type="radio" + ans + ">");
      //     $("#possibleAs").append(possibleAns);
       
    // For loop for answers. 
      if (userAnswer === qA[i].realA && time > 0) {
          right++;
          $("#C.W").text("Correct!");
      }
      else if (userAnswer !== qA[i].realA || time == 0) {
          wrong++;
          $("#C.W").text("Wrong! The correct answer is: " + "#realA");
      }
    }
  }

  function endGame () {
    $("#totalQuestions").text("Total Questions: 4");
    $("#answeredRight").text("Right: " + right);
    // Wrong won't show up, it comes up as an error.
    // $("#answeredWrong").text("Wrong: +" wrong);
    // Restart won't restart the game the way it is intended to-but now the timer will restart.
    $(restart).show("#restart");
    console.log(restart);
    $("#restart").on("click", restartTimer);
    function restartTimer () {
      clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#start").hide();
        $("#restart").hide();
        game();
        endGame.hide();
      }
    
      function decrement () {
        timereset--;
        $("#timer").html("<h2>Time Remaining: " + timereset + "</h2>");
        if (timereset === 0) {
          stop();
          endGame();
        };
      }
    
      function stop () {
        clearInterval(intervalId);
      }
      endGame();
  }

  // Errors in ver 2:
  // "Wrong" won't show up (was unable to get it to work in either versions.)
// Submit works, but will not stop the timer.
// Restart will restart the timer, but will not clear the fields.