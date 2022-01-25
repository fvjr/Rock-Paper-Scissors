//get user choice of RPS
var playerScore = 0;
var playerChoice;
var computerChoice;



var getUserChoice = function () {
   playerChoice = prompt('Choose rock, paper, or scissors').toLowerCase();
  console.log(playerChoice)
  return playerChoice
}

var setComputerChoice = function () {
  var computerChoiceIndex = Math.floor(Math.random() * 3)
  if (computerChoiceIndex === 1) {
    computerChoice = 'rock';
    console.log('Computer plays "ROCK"');
  } else if (computerChoiceIndex === 2) {
    computerChoice = 'paper';
    console.log('Computer plays "PAPER"')
  } else {
    computerChoice = 'scissors';
    console.log('Computer plays "SCISSORS"')
  }
  alert('Computer chose ' + computerChoice + '!')
  return computerChoice
}

var checkWinner = function (playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("It's a tie");
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    console.log("Player chose ROCK and won vs computer's SCISSORS")
    playerScore++;
    console.log(playerScore);
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    console.log("Player chose SCISSORS and won vs computer's PAPER")
    playerScore++;
    console.log(playerScore);
  }
  else if (playerChoice === 'paper' && computerChoice === 'rock') {
    console.log("Player chose paper and won vs computer's rock")
    playerScore++;
    console.log(playerScore);
  } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
    console.log("computer chose ROCK and won vs player's SCISSORS")
    playerScore--;
    console.log(playerScore);
  } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
    console.log("computer chose SCISSORS and won vs player's PAPER")
    playerScore--;
    console.log(playerScore)
  }
  else if (computerChoice === 'paper' && playerChoice === 'rock') {
    console.log("computer chose paper and won vs player's rock")
    playerScore--;
    console.log(playerScore)
  }
  if (playerScore === 5) {
    alert('You win!')
  }
  return playerScore
}

var playAgain = function(){
  getUserChoice()
  setComputerChoice();
  checkWinner(playerChoice, computerChoice);
}



function playGame(){
  getUserChoice();
  setComputerChoice();
  checkWinner(playerChoice, computerChoice);
  console.log(playerScore)
  while (playerScore < 5){
  playAgain();
}
  console.log('You win!')
}


playGame();


