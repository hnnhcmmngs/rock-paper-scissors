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

const body = document.querySelector("body");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const message = document.querySelector("#message");

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

let gameOverMessage = document.createElement("div");

const resetGame = document.querySelector("#reset");
resetGame.disabled = true;

rock.addEventListener("click", () => {
    let result = playRound("rock", getComputerChoice());
    message.textContent = result;
    updateScore(result);
    rounds += 1;
    if (rounds === 5) {
        endGame();
    }
})

paper.addEventListener("click", () => {
    let result = playRound("paper", getComputerChoice());
    message.textContent = result;
    updateScore(result);
    rounds += 1;
    if (rounds === 5) {
        endGame();
    }
})

scissors.addEventListener("click", () => {
    let result = playRound("scissors", getComputerChoice());
    message.textContent = result;
    updateScore(result);
    rounds += 1;
    if (rounds === 5) {
        endGame();
    }
})

resetGame.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    player.textContent = `Player Score = ${playerScore}`;
    computer.textContent = `Computer Score = ${computerScore}`;
    rock.disabled = false;
    rock.style.opacity = "1";
    paper.disabled = false;
    paper.style.opacity = "1";
    scissors.disabled = false;
    scissors.style.opacity = "1";
    message.textContent = "Please choose an option above!";
    body.removeChild(gameOverMessage);
    resetGame.disabled = true;
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

function endGame() {
    rock.disabled = true;
    rock.style.opacity = ".4";
    paper.disabled = true;
    paper.style.opacity = ".4";
    scissors.disabled = true;
    scissors.style.opacity = ".4";
    let gameResult;
    if (playerScore > computerScore) {
        gameResult = "The Game is Over! You Won!";
    } else if (playerScore < computerScore) {
        gameResult = "The Game is Over! You Lost!";
    } else {
        gameResult = "The Game is Over! You Tied!";
    }
    gameOverMessage.textContent = gameResult;
    gameOverMessage.style.fontSize = "32px";
    gameOverMessage.style.fontWeight = "bold";
    body.insertBefore(gameOverMessage, resetGame);
    resetGame.disabled = false;
}