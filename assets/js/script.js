let playerName = "Player";
let playerTurn = '';
let computerTurn = '';
let randNum = ''
let scores = [0, 0, 0];
let result = '';
let playerWin = ''
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


//main loop
let count=0;
let exit = false;
while (exit == false) {
getPlayerName();
getComputerTurn();
getResult();

document.getElementById('reset').addEventListener('click', function() {exit=true}) // change back to reload later

count +=1
if (count == 100); {exit=true}
logout()
};


//Functions
// Event Listener for player name  
function getPlayerName() {
    
            playerNameElement.innerText = playerName
  }
// Generate Computer Turn
function getComputerTurn() {
    var turns = ["rock", "paper", "scissors", "lizard", "spock"];
    console.log(turns);
    randNum = Math.floor(Math.random() * 5);
    computerTurn = turns[randNum];
    
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
            

        });
    }
})
}
function getResult() {
    if (playerTurn === computerTurn) {
        scores[1] += 1; // Increment the tie score
    }
//Compare choices
for (let key in rules) {
    
function logout(){
    console.log(playerName);
    console.log(`Computer chose ${computerTurn}`);
    console.log(randNum);
    console.log(computerTurn);
    console.log(scores)
}

for (let key in rules) {
    for (let innerKey in rules[key]) {
        if (playerTurn === key) {
            if (computerTurn === rules[key][0]) {console.log(rules[key][0])
                result = playerWin;
            console.log(rules[key][0][1])
            } else if (computerTurn === rules[key][1]) {console.log(rules[key][1])
                result = playerWin;
            }
        }
    }
    }
        console.log(`${key} -> ${innerKey}: ${rules[key][innerKey]}`);
    }
}