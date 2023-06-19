function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
      return "rock";
    } else if (num === 1) {
      return "paper";
    } else {
      return "scissor";
    }
  }
  
  // For player
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerChoice = getComputerChoice();
  
    if (playerSelection === "rock" && computerChoice === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerChoice === "rock") {
      return "You Win! Paper beats Rock";
    } else if (playerSelection === "scissor" && computerChoice === "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerChoice === "scissor") {
      return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerChoice === "scissor") {
      return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissor" && computerChoice === "paper") {
      return "You Win! Scissors beats Paper";
    } else {
      return "It's a tie";
    }
  }
  
  const computerSelection = getComputerChoice();
  const playerSelection = prompt("Choose between Rock, Paper, or Scissors:");
  console.log(playRound(playerSelection, computerSelection));