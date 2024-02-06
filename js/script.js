function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return `You Tied! You both chose ${capitalizeFirstLetter(computerSelection)}!`
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

function playGame() {
    let player_score = 0;
    let computer_score = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        let result = playRound(playerChoice, getComputerChoice());
        console.log(result)
        if (result.includes("Won!")) {
            player_score += 1
        } else if (result.includes("Lost!")) {
            computer_score += 1
        }
    }
    if (player_score > computer_score) {
        console.log("The game is over! You Won!")
    } else if (player_score < computer_score) {
        console.log("The game is over! You Lost!")
    } else {
        console.log("The game is over! You Tied!")
    }
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}