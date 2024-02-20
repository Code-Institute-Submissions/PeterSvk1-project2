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
    // Implement your game logic here
    // Compare userChoice and npcChoice, update scores, and display results
    // For a simple example:
    if (userChoice === npcChoice) {
        alert('It\'s a tie!');
    } else if (
        (userChoice === 'rock' && (npcChoice === 'scissors' || npcChoice === 'lizard')) ||
        (userChoice === 'paper' && (npcChoice === 'rock' || npcChoice === 'spock')) ||
        (userChoice === 'scissors' && (npcChoice === 'paper' || npcChoice === 'lizard')) ||
        (userChoice === 'lizard' && (npcChoice === 'spock' || npcChoice === 'paper')) ||
        (userChoice === 'spock' && (npcChoice === 'scissors' || npcChoice === 'rock'))
    ) {
        alert('You win!');
        userScore++;
    } else {
        alert('You lose!');
        npcScore++;
    }

    // Update the score display
    userScoreElement.textContent = userScore;
    npcScoreElement.textContent = npcScore;

    // Update the displayed choices
    userChoiceWord.textContent = userChoice;
    npcChoiceWord.textContent = npcChoice;
}

// Function to handle user clicks on buttons
function handleButtonClick(event) {
    const userChoice = event.target.getAttribute('aria-label');
    const npcChoice = generateNPCChoice();

    // Determine the winner and update scores
    determineWinner(userChoice, npcChoice);
}

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});