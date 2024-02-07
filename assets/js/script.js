let playerName = "Player";
let playerTurn = '';
let computerTurn = '';
scores = [0, 0, 0];
let playerNameElement = document.getElementById('player-turn-text');
//let clickedPlayButton = document.getElementById('')
let playerChoiceDiv = document.getElementById('player-choice');
let playerChoiceIds = ['playerChoice-rock', 'playerChoice-paper', 'playerChoice-scissors', 'playerChoice-lizard', 'playerChoice-spock'];
//**const need score dom variables** 
const rules = {
    'rock': { 'scissors': 'Rock smashes Scissors', 'lizard': 'Rock smashes Lizard' },
    'paper': { 'rock': 'Paper wraps Rock', 'spock': 'Paper Disproves Spock' },
    'scissors': { 'lizard': 'Scissors decapitates Lizard', 'paper': 'Scissors cut Paper' },
    'lizard': { 'paper': 'Lizard eats Paper', 'spock': 'Lizard Poisons Spock' },
    'spock': { 'scissors': 'Spock smashes Scissors', 'rock': 'Spock disintegrates rock' }
};
//Let the DOM Load
document.addEventListener('DOMContentLoaded', function() {});

getPlayerName()
getComputerTurn()
console.log(playerName);
console.log(`Computer chose ${computerTurn}`)



//Functions
// Event Listener for player name  
function getPlayerName() {
    
            playerNameElement.innerText = playerName
  }
// Generate Computer Turn
function getComputerTurn() {
    var turns = ["rock", "paper", "scissors", "lizard", "spock"];
    console.log(turns);
    var randNum = Math.floor(Math.random() * 5);
    console.log(randNum);
    computerTurn = turns[randNum];
    console.log(computerTurn);
};
//get players choice from DOM
function handleButtonClick(){
    playerChoiceIds.forEach(function(playerTurn) {
        document.getElementById(playerTurn).removeAttribute("style");
        document.getElementById(playerTurn).removeAttribute("style");
    let PlayerChoiceId = document.getElementById(playerTurn);
    if (PlayerChoiceId) {
        PlayerChoiceId.addEventListener('click', function() {
            document.getElementById(playerTurn).style.border = "thin solid #00ff00";
            document.getElementById(playerTurn).style.borderRadius = "25px";
            playerTurn = playerTurn.slice(13);
            //testing remove later
            console.log(playerTurn + ' clicked.');

        });
    }
})
}