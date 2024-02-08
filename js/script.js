function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You Tied This Round! You both chose ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lost This Round! Paper beats Rock!"
        } else {
            return "You Won This Round! Rock beats Scissors!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Won This Round! Paper beats Rock!"
        } else {
            return "You Lost This Round! Scissors beats Paper!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lost This Round! Rock beats Scissors!"
        } else {
            return "You Won This Round! Scissors beats Paper!"
        }
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const message = document.querySelector("#message");

let playerScore = 0;
let computerScore = 0;

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

rock.addEventListener("click", () => {
    let result = playRound("rock", getComputerChoice());
    message.textContent = result;
    updateScore(result);
})

paper.addEventListener("click", () => {
    let result = playRound("paper", getComputerChoice());
    message.textContent = result;
    updateScore(result);
})

scissors.addEventListener("click", () => {
    let result = playRound("scissors", getComputerChoice());
    message.textContent = result;
    updateScore(result);
})

function updateScore(result) {
    if (result.includes("Won")) {
        playerScore += 1;
        player.textContent = `Player Score = ${playerScore}`;
    } else if (result.includes("Lost")) {
        computerScore += 1;
        computer.textContent = `Computer Score = ${computerScore}`;
    }
}