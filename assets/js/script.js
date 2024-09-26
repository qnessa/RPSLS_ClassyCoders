//Declare variables
let playerTurn = "";
let computerTurn = "";
let randNum = "";
let scores = [0, 0, 0];
let roundEnded = false
//let clickedPlayButton = document.getElementById('');
let messagePlayer = document.getElementById("messageplayer");
let playerChoiceId = ''
let result = '';
let delay = 1000
const throttledResetGame = throttle(resetGame, delay);
let playerChoiceIds = [
  "playerChoice-rock",
  "playerChoice-paper",
  "playerChoice-scissors",
  "playerChoice-lizard",
  "playerChoice-spock",
];
//Let the DOM Load
document.addEventListener("DOMContentLoaded", function () {});

//get players choice from DOM (main loop)

function handleButtonClick() {
  document.getElementById('play').addEventListener("click", function () {
    document.getElementById('openModal').style.display = "none";
  });
  document.getElementById('reset').addEventListener("click", function () {
  location.reload()
  });
  playerChoiceIds.forEach(function (playerChoice) {
    playerChoiceId = document.getElementById(playerChoice);
    if (playerChoiceId) {
      playerChoiceId.addEventListener("click", function () {
        if (!roundEnded) {
          playerTurn = playerChoice.slice(13);
          let computerTurn = getComputerTurn(roundEnded);
          getResult(playerTurn, computerTurn);
        }
        roundEnded = true;
        throttledResetGame(scores)
      });
    }
  });
}
// Generate Computer Turn
function getComputerTurn(roundEnded) {
  var turns = ["rock", "paper", "scissors", "lizard", "spock"];
  randNum = Math.floor(Math.random() * 5);
  computerTurn = turns[randNum];
  return computerTurn;
}
//get result comparison
function getResult(roundEnded) {

  if (playerTurn === computerTurn) {
    messagePlayer.innerText = "It's a draw".toUpperCase();
    result = "draw"
  } else if ((playerTurn === 'rock' && (computerTurn === 'scissors' || computerTurn === 'lizard')) ||
    (playerTurn === 'paper' && (computerTurn === 'rock' || computerTurn === 'spock')) ||
    (playerTurn === 'scissors' && (computerTurn === 'paper' || computerTurn === 'lizard')) ||
    (playerTurn === 'lizard' && (computerTurn === 'spock' || computerTurn === 'paper')) ||
    (playerTurn === 'spock' && (computerTurn === 'scissors' || computerTurn === 'rock'))) {
    messagePlayer.innerText = `You Win, ${playerTurn} beats ${computerTurn}`.toUpperCase();
    result = "win"
  } else if (playerTurn == false || computerTurn == false) {
    messagePlayer.innerText = "Make your Choice below".toUpperCase()
  } else {
    messagePlayer.innerText = `You Lose, ${computerTurn} beats ${playerTurn}`.toUpperCase();
    result = "loss"
  }

  return result
}
//reset round
function resetGame() {
  console.log(result);
  playerChoice = null;
  computerChoice = null;
  if (result == "win") {
    scores[0] += 1
  } else if (result == "draw") {
    scores[1] += 1
  } else if (result == "loss") {
    scores[2] += 1
  }
  result = '';
  document.getElementById('score-won').innerText = scores[0];
  document.getElementById('score-drew').innerText = scores[1];
  document.getElementById('score-lost').innerText = scores[2];
  roundEnded = false;
  throttle();
}

function throttle(cb, delay) {
  let wait = false;

  return (...args) => {
    if (wait) {
      return;
    }

    cb(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  }
}
handleButtonClick()
