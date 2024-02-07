let playerName = "Player";
let playerTurn = '';
let computerTurn = '';
scores = [0, 0, 0];
let playerNameElement = document.getElementById('player-turn-text');
let clickedPlayButton = document.getElementById('')
//**const need score dom variables** 
const rules = {
    'rock': { 'scissors': 'Rock smashes Scissors', 'lizard': 'Rock smashes Lizard' },
    'paper': { 'rock': 'Paper wraps Rock', 'spock': 'Paper Disproves Spock' },
    'scissors': { 'lizard': 'Scissors decapitates Lizard', 'paper': 'Scissors cut Paper' },
    'lizard': { 'paper': 'Lizard eats Paper', 'spock': 'Lizard Poisons Spock' },
    'spock': { 'scissors': 'Spock smashes Scissors', 'rock': 'Spock disintegrates rock' }
};

// Event Listener for player name
getPlayerName()
console.log(playerName);


//Functions
function getPlayerName() {
    
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('play-game').addEventListener('click', function () {
            playerName = document.getElementById('player-name').value;
            console.log(playerName);
            document.getElementById('player-input-div').style.display ="none"
            document.getElementById('game-container').style.display ="block"
            
        });

    });


   
}
