const playerSelection = "paper";
const computerSelection = computerPlay();

const winningMessage = `You win! You picked ${playerSelection} and computer picked ${computerSelection}.`
const losingMessage = `You lose, You picked ${playerSelection} and computer picked ${computerSelection}.`

let playerScore = 0;
let computerScore = 0;

function computerWin() {
  computerScore++;
}

function playerWin() {
  playerScore++;
}

function computerPlay() {
  let computerSelection = Math.floor(Math.random(100) * 3);
  switch (computerSelection) {
    case 0:
      computerSelection = "rock";
      break;
    case 1:
      computerSelection = "paper"
      break;
    case 2:
      computerSelection = "scissors"
      break;
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log(`Tie game. You both picked ${playerSelection}.`)
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection == "paper") {
          console.log(losingMessage);
        } else {
          console.log(winningMessage);
        }
      break;
      case "paper":
        if (computerSelection == "rock") {
          console.log(winningMessage);
        } else {
          console.log(losingMessage);
        }
      break;
      case "scissors":
        if (computerSelection == "rock") {
          console.log(winningMessage);
        } else {
          console.log(losingMessage);
        }
      break;
    }
  }
}

console.log(playRound(playerSelection, computerSelection));