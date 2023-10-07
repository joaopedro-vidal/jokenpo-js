let playerScore = 0;
let compterScore = 0;
let round = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            return "You Won! Rock beats Scissors";
        } else {
            compterScore++;
            return "You Lose! Paper beats Rock";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "You Won! Paper beats Rock";
        } else {
            if (computerSelection === "scissors") {
                compterScore++;
                return "You Lose! Scissors beats Paper";
            }
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            compterScore++;
            return "You Lose! Scissors beats Rock";
        } else {
            if (computerSelection === "paper") {
                playerScore++;
                return "You Won! Scissors beats Paper";
            }
        }
    }
    else if (playerSelection !== ("rock" || "paper" || "scissors")) {
        return "Invalid Input"
    }
}


function computerPlay() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        default:
            return "scissors"
    }
}

function playerValue() {
    let userChoice = prompt("Choose rock, paper or scissors. Write the option in the space below")
    if (userChoice === null) {
        alert("Sorry to see you go!!! Bye for now.")
        return userChoice
    } else {
        let playerSelection = userChoice.trim().toLowerCase();
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            return playerSelection
        } else {
            alert("Invalid!! You digited '" + playerSelection + "' Please write rock, paper or scissors");
            return ""
        }
    }
}

function instructions() {
    alert("Welcome!!! Let's play ROCK, PAPER, SCISSORS.\n\n Please open the console for this game to see your results.\n On Mac, use Cmd + option + J. On Windows, use Ctrl + Shift + J")
}

function game() {
    playerScore = 0;
    compterScore = 0;
    round = 0;
    instructions()
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerValue()
        if (playerSelection === null) {
            break
        } else if (playerSelection === "") {
            i -= 1
        }
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Round : ", i + 1, " Player Score : ", playerScore, "      Computer Score : ", compterScore);
    }
    if (playerScore > compterScore)
        console.log("the Winner is you");
    else
        if (playerScore < compterScore)
            console.log("the Winner is the computer");
        else
            console.log("Draw");
}

game();


