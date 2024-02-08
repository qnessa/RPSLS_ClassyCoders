//Declare variables
let playerName = "Player";
let playerTurn = "";
let computerTurn = "";
let randNum = "";
let scores = [0, 0, 0];
let result = "";
let playerWin = "";
let playerNameElement = document.getElementById("player-turn-text");
//let clickedPlayButton = document.getElementById('')
let playerChoiceDiv = document.getElementById("player-choice");
let messagePlayer = document.getElementById("messageplayer");
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

function gameLoop() {
handleButtonClick()
getComputerTurn();
getResult();

//document.getElementById("reset").addEventListener("click", function () {
//location.reload();
//}); // change back to reload later
logout();
//};
}

// Generate Computer Turn
function getComputerTurn() {
  var turns = ["rock", "paper", "scissors", "lizard", "spock"];
  console.log(turns);
  randNum = Math.floor(Math.random() * 5);
  computerTurn = turns[randNum];
}
//get players choice from DOM
function handleButtonClick() {
  playerChoiceIds.forEach(function (playerTurn) {
  let PlayerChoiceId = document.getElementById(playerTurn);
    if (PlayerChoiceId) {
      PlayerChoiceId.addEventListener("click", function () {
       playerTurn = playerTurn.slice(13);
      });
    }
  });
}
function getResult() {
  if (playerTurn === computerTurn) {
    scores[1] += 1; // Increment  tie score
  }
  if (playerTurn === "rock" && computerTurn === "lizard") {
    messagePlayer.innerText = "Rock beats Lizard";
    score[0] += 1;
  } else if (playerTurn === "rock" && computerTurn === "scissors") {
    messagePlayer.innerText = "Rock beats Scissors";
    score[0] += 1;
  } else if (playerTurn === "paper" && computerTurn === "rock") {
    messagePlayer.innerText = "Paper beats Rock";
    score[0] += 1;
  } else if (playerTurn === "paper" && computerTurn === "spock") {
    messagePlayer.innerText = "Paper beats Spock";
    score[0] += 1;
  } else if (playerTurn === "scissors" && computerTurn === "paper") {
    messagePlayer.innerText = "Scissors beats Paper";
    score[0] += 1;
  } else if (playerTurn === "scissors" && computerTurn === "lizard") {
    messagePlayer.innerText = "Scissors beats Lizard";
    score[0] += 1;
  } else if (playerTurn === "lizard" && computerTurn === "paper") {
    messagePlayer.innerText = "Lizard beats Paper";
    score[0] += 1;
  } else if (playerTurn === "lizard" && computerTurn === "spock") {
    messagePlayer.innerText = "Lizard beats Spock";
    score[0] += 1;
  } else if (playerTurn === "spock" && computerTurn === "scissors") {
    messagePlayer.innerText = "Spock beats Scissors";
    score[0] += 1;
  } else if (playerTurn === "spock" && computerTurn === "rock") {
    messagePlayer.innerText = "Spock beats Rock";
    score[0] += 1;
  } else if (playerTurn ==false || computerTurn ==false) {messagePlayer.innerText="Make your Choice below"}
  else {
    messagePlayer.innerText = `${computerTurn} beats ${playerTurn}`;
    score[2] += 1;
  }
}

function logout() {
console.log(`Computer chose ${computerTurn}`);
  console.log(randNum);
  console.log(computerTurn);
  console.log(scores);
}
gameLoop()