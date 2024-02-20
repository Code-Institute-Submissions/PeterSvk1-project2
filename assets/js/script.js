const userScoreElement = document.getElementById('user');
const npcScoreElement = document.getElementById('npc');
const drawScoreElement = document.getElementById('draw');
const triesLeftElement = document.getElementById('tries');
const userChoiceText = document.getElementById('userChoiceText');
const userChoiceWord = document.getElementById('userChoiceWord');
const npcChoiceText = document.getElementById('npcChoiceText');
const npcChoiceWord = document.getElementById('npcChoiceWord');
const buttons = document.querySelectorAll('.button');

let userScore = 0;
let npcScore = 0;
let drawScore = 0;
let tries = 5; 

function generateNPCChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, npcChoice) {
    if (userChoice === npcChoice) {
        alert('Its a draw, try again');
        drawScore++;
        drawScoreElement.textContent = drawScore;
    } else if (
        (userChoice === 'rock' && (npcChoice === 'scissors' || npcChoice === 'lizard')) ||
        (userChoice === 'paper' && (npcChoice === 'rock' || npcChoice === 'spock')) ||
        (userChoice === 'scissors' && (npcChoice === 'paper' || npcChoice === 'lizard')) ||
        (userChoice === 'lizard' && (npcChoice === 'spock' || npcChoice === 'paper')) ||
        (userChoice === 'spock' && (npcChoice === 'scissors' || npcChoice === 'rock'))
    ) {
        alert('Winner');
        userScore++;
        userScoreElement.textContent = userScore;
    } else {
        alert('You lose');
        npcScore++;
        npcScoreElement.textContent = npcScore;
    }

    // Decrement the tries counter
    tries--;
    triesLeftElement.textContent = tries;

    if (tries <= 0) {
        alert('No more tries left');
        resetGame();
    }
}

function resetGame() {
  
    userScore = 0;
    npcScore = 0;
    drawScore = 0;
    tries = 5;


    userScoreElement.textContent = userScore;
    npcScoreElement.textContent = npcScore;
    drawScoreElement.textContent = drawScore;
    triesLeftElement.textContent = tries;

    userChoiceWord.textContent = '';
    npcChoiceWord.textContent = '';
}

function handleButtonClick(event) {
    const userChoice = event.currentTarget.getAttribute('aria-label');
    const npcChoice = generateNPCChoice();

    userChoiceWord.textContent = userChoice;
    npcChoiceWord.textContent = npcChoice;

    determineWinner(userChoice, npcChoice);

    setTimeout(() => {
        userChoiceWord.textContent = '';
        npcChoiceWord.textContent = '';
    }, 3000);
}

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});