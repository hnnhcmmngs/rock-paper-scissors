function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return `You tied! You both chose ${capitalizeFirstLetter(computerSelection)}!`
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            return "You Lost! Paper beats Rock!"
        } else {
            return "You Won! Rock beats Scissors!"
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return "You Won! Paper beats Rock!"
        } else {
            return "You Lost! Scissors beats Paper!"
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
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