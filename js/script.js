function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You Tied This Round! You both chose ${capitalizeFirstLetter(computerSelection)}!`
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

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const message = document.querySelector("#message");

rock.addEventListener("click", () => {
    let result = playRound("rock", getComputerChoice());
    message.textContent = result;
})

paper.addEventListener("click", () => {
    let result = playRound("paper", getComputerChoice());
    message.textContent = result;
})

scissors.addEventListener("click", () => {
    let result = playRound("scissors", getComputerChoice());
    message.textContent = result;
})