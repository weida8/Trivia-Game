var questionBank = [];

$(document).ready(function() {
  game();
});

function game() {
  console.log("game");
  init();
  console.log(questionBank[0].question);
  for(var i=0; i<questionBank.length; i++){
    console.log(i);
    question(i);
  }
}

function question(questionNum) {
  console.log("inside question");
  var questionCounter = 10;
  setInterval(function(){
    console.log("hello");
    $("#timer").html("Time Remaining: "+questionCounter+" Seconds");
    $("#question").html(questionBank[questionNum].question);
    $("#answer1").html(questionBank[questionNum].answer1);
    $("#answer2").html(questionBank[questionNum].answer2);
    $("#answer3").html(questionBank[questionNum].answer3);
    $("#answer4").html(questionBank[questionNum].answer4);
    questionCounter -= 1;
    if(questionCounter === 0) {
      return;
    }
  }, 1000);
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
}

function question(questionIn, answer1In, answer2In, answer3In, answer4In, correctIn) {
  this.question = questionIn;
  this.answer1 = answer1In;
  this.answer2 = answer2In;
  this.answer3 = answer3In;
  this.answer4 = answer4In;
  this.correct = correctIn;
}
