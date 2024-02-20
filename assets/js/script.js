// Get necessary elements from the DOM
const userScoreElement = document.getElementById('user');
const npcScoreElement = document.getElementById('npc');
const userChoiceText = document.getElementById('userChoiceText');
const userChoiceWord = document.getElementById('userChoiceWord');
const npcChoiceText = document.getElementById('npcChoiceText');
const npcChoiceWord = document.getElementById('npcChoiceWord');
const buttons = document.querySelectorAll('.button');

let userScore = 0;
let npcScore = 0;

// Function to generate NPC's choice
function generateNPCChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, npcChoice) {

    if (userChoice === npcChoice) {
        alert('Its a draw, try again');
    } else if (
        (userChoice === 'rock' && (npcChoice === 'scissors' || npcChoice === 'lizard')) ||
        (userChoice === 'paper' && (npcChoice === 'rock' || npcChoice === 'spock')) ||
        (userChoice === 'scissors' && (npcChoice === 'paper' || npcChoice === 'lizard')) ||
        (userChoice === 'lizard' && (npcChoice === 'spock' || npcChoice === 'paper')) ||
        (userChoice === 'spock' && (npcChoice === 'scissors' || npcChoice === 'rock'))
    ) {
        alert('Winner!');
        userScore++;
    } else {
        alert('You lose!');
        npcScore++;
    }

    userScoreElement.textContent = userScore;
    npcScoreElement.textContent = npcScore;

    userChoiceWord.textContent = userChoice;
    npcChoiceWord.textContent = npcChoice;

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
    }, 2000); 
}

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});