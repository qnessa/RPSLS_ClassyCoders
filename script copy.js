let playerName = '';
let playerTurn = '';
let computerTurn = '';
scores = [0, 0, 0];
//**const need score dom variables** 
const rules = {
    'rock': { 'scissors': 'Rock smashes Scissors', 'lizard': 'Rock smashes Lizard' },
    'paper': { 'rock': 'Paper wraps Rock', 'spock': 'Paper Disproves Spock' },
    'scissors': { 'lizard': 'Scissors decapitates Lizard', 'paper': 'Scissors cut Paper' },
    'lizard': { 'paper': 'Lizard eats Paper', 'spock': 'Lizard Poisons Spock' },
    'spock': { 'scissors': 'Spock smashes Scissors', 'rock': 'Spock disintegrates rock' }
};

// Event Listener for player name

function getPlayerName() {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('submitButton').addEventListener('click', function () {
            playerName = document.getElementById('playerName').value;
            console.log(playerName);
        });
    });
    return playerName;
}
 





//Main Game functions
//get playerChoice
function getPlayerTurn() {
    var playerChoices = document.querySelectorAll(".player-choice");
    playerChoices.forEach(function (playerChoice) {
        playerChoice.addEventListener('click', function (event) {
            playerTurn = event.target.innerText.toLowerCase();
            console.log(`${playerName} chose ${playerTurn}`);
        });
    
    });
}

//generate computer turn
function getComputerTurn() {
    var turns = ["rock", "paper", "scissors", "lizard", "spock"];
    console.log(turns);
    var randNum = Math.floor(Math.random() * 5);
    console.log(randNum);
    computerTurn = turns[randNum];
    console.log(computerTurn);
//isplay computer turn
    document.getElementById(`computer-${computerTurn}`).textContent = "Computer";
    return computerTurn

};



//check turns
/*function checkTurns(playerTurn, computerTurn, rules, scores) {
    console.log(playerTurn)
    if (playerTurn === computerTurn) { ++scores[1] };
    for (var key in rules) {
        if (rules.hasOwnProperty(key)) {
            console.log("Key:", key);
            var nestedObj = rules[key];
            for (var nestedKey in nestedObj) {
                if (nestedObj.hasOwnProperty(nestedKey)) {
                    console.log("Nested key:", nestedKey, "Value:", nestedObj[nestedKey]);
                }
            
        }
    }
}
}*/

console.log(`computer chose ${computerTurn}`)
console.log(`players name is ${playerName}`)
console.log(`computer chose ${playerTurn}`)
getPlayerName();
getPlayerTurn();
getComputerTurn();
//checkTurns()
