let playerScore = 0;
let computerScore = 0;
let games = 5;

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

function userPlay() {
  return formattedResponse = prompt("Rock, paper, scissors?").toLowerCase();;
}

function playRound(playerSelection, computerSelection) {
  const winningMessage = `You win! You picked ${playerSelection} and computer picked ${computerSelection}.`
  const losingMessage = `You lose, You picked ${playerSelection} and computer picked ${computerSelection}.`
  if (playerSelection == computerSelection) {
    console.log(`Tie game. You both picked ${playerSelection}.`)
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection == "paper") {
          console.log(losingMessage);
          computerWin()
        } else {
          console.log(winningMessage);
          playerWin()
        }
      break;
      case "paper":
        if (computerSelection == "rock") {
          console.log(winningMessage);
          playerWin()
        } else {
          console.log(losingMessage);
          computerWin()
        }
      break;
      case "scissors":
        if (computerSelection == "rock") {
          console.log(winningMessage);
          playerWin()
        } else {
          console.log(losingMessage);
          computerWin()
        }
      break;
    }
  }
}

function game() {
  for (var i = 0; i < games; i++) {
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
    computerPlay();
  }
  if (playerScore == computerScore) {
    console.log(`It's a tie! You both earned ${playerScore} points.`)
  } else {
  playerScore > computerScore ? console.log(`Congratulations, you win with a score of ${playerScore} compared to ${computerScore}!`) : console.log(`Sorry, you lose with a score of ${playerScore} compared to ${computerScore}.`);
  }
}
