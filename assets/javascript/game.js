var questionBank = [];
var questionNum = 0;
var questionInterval = null;
var correctCount = 0;
var resultTime = 5000;

$(document).ready(function() {
  init();
  $("#answer1").click(function() {
    if(questionBank[questionNum].answer1 === questionBank[questionNum].correct) {
      clearInterval(questionInterval);
      correctA();
    } else {
      clearInterval(questionInterval);
      wrongA();
    }
  });
  $("#answer2").click(function() {
    if(questionBank[questionNum].answer2 === questionBank[questionNum].correct) {
      clearInterval(questionInterval);
      correctA();
    } else {
      clearInterval(questionInterval);
      wrongA();
    }
  });
  $("#answer3").click(function() {
    if(questionBank[questionNum].answer3 === questionBank[questionNum].correct) {
      clearInterval(questionInterval);
      correctA();
    } else {
      clearInterval(questionInterval);
      wrongA();
    }
  });
  $("#answer4").click(function() {
    if(questionBank[questionNum].answer4 === questionBank[questionNum].correct) {
      clearInterval(questionInterval);
      correctA();
    } else {
      clearInterval(questionInterval);
      wrongA();
    }
  });
  $("#restartBtn").click(function() {
    questionNum = 0;
    correctCount = 0;
    questions();
  })
function questions() {
  console.log("inside question number:"+questionNum);
  clearResults();
  if(questionNum >= 7) {
    finalScreen();
  } else {
    $("#question").html(questionBank[questionNum].question);
    $("#answer1").html(questionBank[questionNum].answer1);
    $("#answer2").html(questionBank[questionNum].answer2);
    $("#answer3").html(questionBank[questionNum].answer3);
    $("#answer4").html(questionBank[questionNum].answer4);
    var questionCounter = 15;
    $("#timer").html("Time Remaining: "+questionCounter+" Seconds");
    questionInterval = setInterval(function(){
      console.log(questionCounter);
      questionCounter -= 1;
      $("#timer").html("Time Remaining: "+questionCounter+" Seconds");
      if(questionCounter <= 0) {
        clearInterval(questionInterval);
        timesUp(questionNum);
      }
    }, 1000);
  }
}

function finalScreen() {
  $("#resultTitle").html("This Is The End Of Your Journey");
  $("#resultMssg").html("Final Results");
  $("#resultAnswer").html(correctCount+"/"+questionBank.length);
  $("#restartBtn").append($('<input type="button" class="btn btn-primary" value="Restart">'));
}

function timesUp() {
  clearQuestion();
  $("#resultTitle").html("YOU RAN OUT OF TIME!");
  $("#resultMssg").html("Correct Answer:");
  $("#resultAnswer").html(questionBank[questionNum].correct);
  questionNum += 1;
  var timeOut = setTimeout(function() {
    questions();
  }, resultTime);
}

function wrongA() {
  clearQuestion();
  $("#resultTitle").html("WRONG ANSWER! =(");
  $("#resultMssg").html("Correct Answer:");
  $("#resultAnswer").html(questionBank[questionNum].correct);
  console.log(questionNum);
  questionNum += 1;
  console.log(questionNum);
  var timeOut = setTimeout(function() {
    questions();
  }, resultTime);
}

function correctA() {
  clearQuestion();
  $("#resultTitle").html("Good Job!!!!");
  $("#resultMssg").html("Correct Answer:");
  $("#resultAnswer").html(questionBank[questionNum].correct);
  questionNum += 1;
  correctCount += 1;
  console.log(questionNum);
  var timeOut = setTimeout(function() {
    questions();
  }, resultTime);
}

function clearQuestion() {
  console.log("question cleared!!!!");
  $("#timer").empty();
  $("#question").empty();
  $("#answer1").empty();
  $("#answer2").empty();
  $("#answer3").empty();
  $("#answer4").empty();
}

function clearResults() {
  $("#resultTitle").empty();
  $("#resultMssg").empty();
  $("#resultAnswer").empty();
  $("#restartBtn").empty();
}

function init() {
  var question1 = new question(
    "What do people call Dynaerys' father?",
    "Crazy King",
    "Aerys the Great",
    "Little Finger",
    "The Mad King",
    "The Mad King"
  )
  var question2 = new question(
    "Who killed Rhaegar at the battle of the Trident?",
    "Eddard Stark",
    "Tywin Lannister",
    "Robert Baratheon",
    "The Sand Snakes",
    "Robert Baratheon"
  )
  var question3 = new question(
    "What was the song that the Freys played to hint the start of the Red Wedding?",
    "Hands of Gold",
    "The Rains of Castamere",
    "The Trout in the Towers",
    "Gentle Mother, Front of Mercy",
    "The Rains of Castamere"
  )
  var question4 = new question(
    "What is the nickname for Ser Davos?",
    "Smuggler Knight",
    "Knight of the Black Water",
    "Stannis' Honor Guard",
    "The Onion Knight",
    "The Onion Knight"
  )
  var question5 = new question(
    "Melisandre gave birth to a shadow that killed Renly Baratheon. Who did the shadow look like?",
    "Jeoffery",
    "King beyond The Wall",
    "Stannis",
    "Melisandre",
    "Stannis"
  )
  var question5 = new question(
    "Melisandre gave birth to a shadow that killed Renly Baratheon. Who did the shadow look like?",
    "Jeoffery",
    "King beyond The Wall",
    "Stannis",
    "Melisandre",
    "Stannis"
  )
  var question6 = new question(
    "What is the translation of the phrase: 'Valar dohaeris'?",
    "All men must die",
    "All men must serve",
    "All men must be no one",
    "The prince of that was promised",
    "All men must serve"
  )
  var question7 = new question(
    "Who planned the wild fire attack that destroyed some of Stannis' fleet?",
    "Tywin",
    "Renly",
    "Cersei",
    "Tyrion",
    "Tyrion"
  )
  questionBank = [question1, question2, question3, question4, question5, question6, question7];
  questions();
}

function question(questionIn, answer1In, answer2In, answer3In, answer4In, correctIn) {
  this.question = questionIn;
  this.answer1 = answer1In;
  this.answer2 = answer2In;
  this.answer3 = answer3In;
  this.answer4 = answer4In;
  this.correct = correctIn;
}

});
