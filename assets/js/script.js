//Declare variables
let playerName = "Player";
let playerTurn = "";
let computerTurn = "";
let randNum = "";
let scores = [0, 0, 0];
let playerWin = "";
let roundEnded = false
//let clickedPlayButton = document.getElementById('');
let messagePlayer = document.getElementById("messageplayer");
let playerChoiceId = ''
let result ='';
let playerChoiceIds = [
  "playerChoice-rock",
  "playerChoice-paper",
  "playerChoice-scissors",
  "playerChoice-lizard",
  "playerChoice-spock",
];
//**const need score dom variables**
//Let the DOM Load
document.addEventListener("DOMContentLoaded", function () {});
//get players choice from DOM
function handleButtonClick() {
  playerChoiceIds.forEach(function (playerChoice) {
    playerChoiceId = document.getElementById(playerChoice);
    if (playerChoiceId) {
      playerChoiceId.addEventListener("click", function () {
        if (!roundEnded) {
          playerTurn = playerChoice.slice(13);
          console.log(`player has chosen ${playerTurn}`)
          let computerTurn = getComputerTurn();
          getResult(playerTurn, computerTurn, scores);
        }
        roundEnded = true;
        resetGame(scores)
      });
    }
  });
}
// Generate Computer Turn
function getComputerTurn() {
  var turns = ["rock", "paper", "scissors", "lizard", "spock"];
  console.log(turns);
  randNum = Math.floor(Math.random() * 5);
  computerTurn = turns[randNum];
  console.log(`computer has chosen ${computerTurn}`)
  return computerTurn;
}
//get result comparison
function getResult() {
  console.log("getResult is called")
  console.log(playerTurn)
  console.log(computerTurn)
  console.log(`scores are ${scores}`)
  if (playerTurn === computerTurn) {
    messagePlayer.innerText = "It's a draw";
    result= "draw"
  } else if ((playerTurn === 'rock' && (computerTurn === 'scissors' || computerTurn === 'lizard')) || (playerTurn === 'paper' && (computerTurn === 'rock' || computerTurn === 'spock')) ||
    (playerTurn === 'scissors' && (computerTurn === 'paper' || computerTurn === 'lizard')) ||
    (playerTurn === 'lizard' && (computerTurn === 'spock' || computerTurn === 'paper')) ||
    (playerTurn === 'spock' && (computerTurn === 'scissors' || computerTurn === 'rock'))) {
    messagePlayer.innerText = `${playerTurn} beats ${computerTurn}`;
    result ="win"
  } else if (playerTurn == false || computerTurn == false) {
    messagePlayer.innerText = "Make your Choice below"
  } else {
    messagePlayer.innerText = `${computerTurn} beats ${playerTurn}`;
    result = "loss"
  }
  return result
}
//reset round
function resetGame() {
  playerChoice = null;
  computerChoice = null;
  if (result ==="win") {scores[0] +=1
  } else if (result ==="draw") {scores[1] +=1}
  else if (result==="loss") {scores[2] +=1 }
  result = '';
  document.getElementById('score-won').innerText =scores[0];
  document.getElementById('score-drew').innerText =scores[1];
  document.getElementById('score-lost').innerText =scores[2];
  roundEnded = false;
}
handleButtonClick()
