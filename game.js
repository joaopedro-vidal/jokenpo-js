function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            return "You Won! Rock beats Scissors";
        } else {
            return "You Lose! Paper beats Rock";
        }
    }
    else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "You Won! Paper beats Rock";
        } else {
            if(computerSelection === "scissors") {
                return "You Lose! Scissors beats Paper";
            }
        }
    }
    else if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            return "You Lose! Scissors beats Rock";
        } else {
            if(computerSelection === "paper") {
                return "You Won! Scissors beats Paper";
            }
        }
    }
    else if(playerSelection !== ("rock" || "paper" || "scissors")) {
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


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerValue()
        if(playerSelection === null) {
            i = 5
            break
        } else if (playerSelection === "") {
            i -= 1
        }
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();


