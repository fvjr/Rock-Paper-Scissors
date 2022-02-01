//access buttons
let btnRock = document.querySelector('#btnRock')
let btnPaper = document.querySelector('#btnPaper')
let btnScissors = document.querySelector('#btnScissors')

//access score and results
let playerScoreDisplay = document.querySelector('#player-score');
let computerScoreDisplay = document.querySelector('#computer-score');
let playerChoiceDisplay = document.querySelector('#player-choice');
let computerChoiceDisplay = document.querySelector('#computer-choice');
let resultsDisplay = document.querySelector('#results');
let victoryDisplay = document.querySelector('#victory-text');


//get user choice of RPS
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

let setComputerChoice = function () {
  let computerChoiceIndex = Math.floor(Math.random() * 3)
  if (computerChoiceIndex === 1) {
    computerChoice = 'rock';
    computerChoiceDisplay.textContent = `Computer plays ${computerChoice}!`;
  } else if (computerChoiceIndex === 2) {
    computerChoice = 'paper';
    computerChoiceDisplay.textContent = `Computer plays ${computerChoice}!`;
  } else {
    computerChoice = 'scissors';
    computerChoiceDisplay.textContent = `Computer plays ${computerChoice}!`;
  }
  return computerChoice
}

let checkWinner = function (playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    resultsDisplay.textContent = "It's a tie!"
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    resultsDisplay.textContent = 'Player wins!'
    playerScore++;
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    resultsDisplay.textContent = 'Player wins!'
    playerScore++;
  }
  else if (playerChoice === 'paper' && computerChoice === 'rock') {
    resultsDisplay.textContent = 'Player wins!'
    playerScore++;
  } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
    resultsDisplay.textContent = 'Computer wins!'
    computerScore++;
  } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
    resultsDisplay.textContent = 'Computer wins!'
  }
  else if (computerChoice === 'paper' && playerChoice === 'rock') {
    resultsDisplay.textContent = 'Computer wins!'
    computerScore++;
  }
  if (playerScore === 5 && computerScore < 5) {
    victoryDisplay.textContent = 'Player wins!'
  } else if (playerScore === 5 && computerScore === 5) {
    victoryDisplay.textContent = 'Noone wins, tie'
  } else if (playerScore < 5 && computerScore === 5) {
    victoryDisplay.textContent = 'Computer wins!'
  }
  playerScoreDisplay.textContent = `Your Score: ${playerScore}`  ;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`
}

function playGame() {
  setPlayerChoice(event);
  setComputerChoice();
  checkWinner(playerChoice, computerChoice);
}

let setPlayerChoice = function (event) {
  let element = event.target.textContent.toLowerCase();
  playerChoice = element;
  playerChoiceDisplay.textContent = `You chose ${playerChoice}!`;
  return playerChoice
}

btnRock.addEventListener('click', playGame);
btnPaper.addEventListener('click', playGame);
btnScissors.addEventListener('click', playGame);
