function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You Tied! You both chose ${capitalizeFirstLetter(computerSelection)}!`
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lost! Paper beats Rock!"
        } else {
            return "You Won! Rock beats Scissors!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Won! Paper beats Rock!"
        } else {
            return "You Lost! Scissors beats Paper!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lost! Rock beats Scissors!"
        } else {
            return "You Won! Scissors beats Paper!"
        }
    } else {
        return "Please choose either Rock, Paper, or Scissors!"
    }
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    let result = playRound("rock", getComputerChoice());
    console.log(result);
})

paper.addEventListener("click", () => {
    let result = playRound("paper", getComputerChoice());
    console.log(result);
})

scissors.addEventListener("click", () => {
    let result = playRound("scissors", getComputerChoice());
    console.log(result);
})