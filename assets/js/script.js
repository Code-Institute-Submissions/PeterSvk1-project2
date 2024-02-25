const userScoreElement = document.getElementById('user');
const npcScoreElement = document.getElementById('npc');
const drawScoreElement = document.getElementById('draw');
const triesLeftElement = document.getElementById('tries');
const userWord = document.getElementById('user-choice-word');
const npcWord  = document.getElementById('npc-choice-word');
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
        console.log('draw');
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
        console.log('player win');
    } else {
        alert('You lose');
        npcScore++;
        npcScoreElement.textContent = npcScore;
        console.log('player loss');
    }

    
    tries--;
    triesLeftElement.textContent = tries;

    if (tries <= 0) {
        alert('No more tries left');
        resetGame();
    }
}

function resetGame() {
    setTimeout(() => {
        userScore = 0;
        npcScore = 0;
        drawScore = 0;
        tries = 5;

        userScoreElement.textContent = userScore;
        npcScoreElement.textContent = npcScore;
        drawScoreElement.textContent = drawScore;
        triesLeftElement.textContent = tries;

        userWord.textContent = '';
        npcWord.textContent = '';
    }, 3000);
}

function handleButtonClick(event) {
    const userChoice = event.currentTarget.getAttribute('aria-label');
    const npcChoice = npcRandomChoice();
    console.log('Player :', userChoice);
    console.log('NPC :', npcChoice);

    userWord.textContent = userChoice;
    npcWord.textContent = npcChoice;

    whoWon(userChoice, npcChoice);


    setTimeout(() => {
        userWord.textContent = '';
        npcWord.textContent = '';
    }, 5000);
}

//event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});