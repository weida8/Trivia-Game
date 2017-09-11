var questionBank = [];
var questionNum = 0;
var questionInterval;
var answerCounterInterval;

$(document).ready(function() {
  init();
  $("#answer1").click(function() {
    if(questionBank[questionNum].answer1 === questionBank[questionNum].correct) {
      clearInterval(questionInterval);
      correctA(questionNum);
    } else {
      clearInterval(questionInterval);
      wrongA(questionNum);
    }
  });
  $("#answer2").click(function() {
    if(questionBank[questionNum].answer2 === questionBank[questionNum].correct) {
      clearInterval(questionInterval);
      correctA(questionNum);
    } else {
      clearInterval(questionInterval);
      wrongA(questionNum);
    }
  });
  $("#answer3").click(function() {
    if(questionBank[questionNum].answer3 === questionBank[questionNum].correct) {
      clearInterval(questionInterval);
      correctA(questionNum);
    } else {
      clearInterval(questionInterval);
      wrongA(questionNum);
    }
  });
  $("#answer4").click(function() {
    if(questionBank[questionNum].answer4 === questionBank[questionNum].correct) {
      clearInterval(questionInterval);
      correctA(questionNum);
    } else {
      clearInterval(questionInterval);
      wrongA(questionNum);
    }
  });
});

function questions(questionNum) {
  console.log("inside question number:"+questionNum);
  $("#question").html(questionBank[questionNum].question);
  $("#answer1").html(questionBank[questionNum].answer1);
  $("#answer2").html(questionBank[questionNum].answer2);
  $("#answer3").html(questionBank[questionNum].answer3);
  $("#answer4").html(questionBank[questionNum].answer4);
  var questionCounter = 10;
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

function timesUp(questionNum) {
  $("#timer").empty();
  $("#question").empty();
  $("#answer1").empty();
  $("#answer2").empty();
  $("#answer3").empty();
  $("#answer4").empty();
  $("#timesUpTitle").html("YOU RAN OUT OF TIME!");
  $("#timesUpMssg").html("Correct Answer:");
  $("#timesUpAnswer").html(questionBank[questionNum].correct);
  var answerCounter = 8;
  answerCounterInterval = setInterval(function(){
    answerCounter -= 1;
    if(answerCounter <= 0) {
      clearInterval(answerCounterInterval);
    }
  }, 1000);
  questionNum += 1;
  clearInterval(answerCounterInterval);
  questions(questionNum);
}

function wrongA(questionNum) {
  $("#timer").empty();
  $("#question").empty();
  $("#answer1").empty();
  $("#answer2").empty();
  $("#answer3").empty();
  $("#answer4").empty();
  $("#timesUpTitle").html("WRONG ANSWER! =(");
  $("#timesUpMssg").html("Correct Answer:");
  $("#timesUpAnswer").html(questionBank[questionNum].correct);
  var answerCounter = 8;
  answerCounterInterval = setInterval(function(){
    answerCounter -= 1;
    if(answerCounter <= 0) {
      clearInterval(answerCounterInterval);
    }
  }, 1000);
  questionNum += 1;
  clearInterval(answerCounterInterval);
  questions(questionNum);
}

function correctA(questionNum) {
  $("#timer").empty();
  $("#question").empty();
  $("#answer1").empty();
  $("#answer2").empty();
  $("#answer3").empty();
  $("#answer4").empty();
  $("#timesUpTitle").html("You got it right!");
  $("#timesUpMssg").html("Correct Answer:");
  $("#timesUpAnswer").html(questionBank[questionNum].correct);
  var answerCounter = 8;
  answerCounterInterval = setInterval(function(){
    answerCounter -= 1;
    if(answerCounter <= 0) {
      clearInterval(answerCounterInterval);
    }
  }, 1000);
  questionNum += 1;
  clearInterval(answerCounterInterval);
  questions(questionNum);
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
  questionBank = [question1, question2, question3, question4];
  questions(questionNum);
}

function question(questionIn, answer1In, answer2In, answer3In, answer4In, correctIn) {
  this.question = questionIn;
  this.answer1 = answer1In;
  this.answer2 = answer2In;
  this.answer3 = answer3In;
  this.answer4 = answer4In;
  this.correct = correctIn;
}
