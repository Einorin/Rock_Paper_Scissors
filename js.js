let compScore = 0;
let userScore = 0;
const resultOutput = document.querySelector('.resultOutput');
const userOutput = document.querySelector('.userOutput');
const compOutput = document.querySelector('.compOutput')
const scoreReset = document.querySelector('.scoreReset')



function game(result) {
  if (result.slice(0, 7) === "You Win") {
    userScore++;
    resultOutput.textContent = "You win this round!"
  } else if (result.slice(0, 8) === "You Lose") {
    compScore++;
    resultOutput.textContent = "You lose this round!"
  } else {
    resultOutput.textContent = "It's a tie"
  }

  if (userScore === 5) {
    resultOutput.textContent = "Congratulations! You won the game!";
    resetScore();
  } else if (compScore === 5) {
    resultOutput.textContent = "Oops! You lost the game!"
    resetScore();
  }
  userOutput.textContent = userScore;
  compOutput.textContent = compScore
}

function resetScore(){
  compScore = 0;
  userScore = 0;
  scoreReset.textContent = "Scores resets in 3....2....1";

  setTimeout(()=>{
  scoreReset.textContent="";
  resultOutput.textContent="";
  },3000)}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () =>{
  const playerSelection = 'rock';
  const result = playRound(playerSelection, getComputerChoice())
  game(result);
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () =>{
  const playerSelection = 'paper';
  const result = playRound(playerSelection, getComputerChoice())
  game(result);
})

const scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () =>{
  const playerSelection = 'scissors';
  const result = playRound(playerSelection, getComputerChoice())
  game(result);
})


function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else {
    return "It's a tie";
  }
}


