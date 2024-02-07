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

