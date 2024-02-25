const userScoreElement = document.getElementById('user');
const npcScoreElement = document.getElementById('npc');
const drawScoreElement = document.getElementById('draw');
const triesLeftElement = document.getElementById('tries');
const userChoiceWord = document.getElementById('user-choice-word');
const npcChoiceWord = document.getElementById('npc-choice-word');
const buttons = document.querySelectorAll('.button');

let userScore = 0;
let npcScore = 0;
let drawScore = 0;  
let tries = 5; 

function npcRandomChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function whoWon(userChoice, npcChoice) {
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

    
    tries--;
    triesLeftElement.textContent = tries;

    if (tries <= 0) {
        alert('No more tries left');
        resetGameWithDelay();
    }
}

function resetGameWithDelay() {
    setTimeout(() => {
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
    }, 3000);
}

function handleButtonClick(event) {
    const userChoice = event.currentTarget.getAttribute('aria-label');
    const npcChoice = npcRandomChoice();
    console.log('User choice:', userChoice);
    console.log('NPC choice:', npcChoice);

    userChoiceWord.textContent = userChoice;
    npcChoiceWord.textContent = npcChoice;

    whoWon(userChoice, npcChoice);

    setTimeout(() => {
        userChoiceWord.textContent = '';
        npcChoiceWord.textContent = '';
    }, 5000);
}

//event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});