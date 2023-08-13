function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
}

console.log(`Computer Choice: ${getComputerChoice()}`);

// returns a titlecase formatted choice
function normalizeUserChoice(choice) {
    return choice.slice(0, 1).toUpperCase() + choice.slice(1).toLowerCase();
}

// returns result string: does a beat b?
function playRound(playerChoice, computerChoice) {
    // validity checks
    let validChoices = ["Rock", "Paper", "Scissors"]
    if (!["Rock", "Paper", "Scissors"].includes(playerChoice)) {
        return "Invalid choice from Player! Try again"
    }

    if (!["Rock", "Paper", "Scissors"].includes(computerChoice)) {
        return "Invalid choice from Computer! Try again"
    }

    // check for tie
    if (playerChoice === computerChoice) {
        return `Tie! You both picked ${playerChoice}.`
    }

    // decide if player won
    let playerWon;

    if (playerChoice === "Rock") {
        playerWon = (computerChoice === "Paper") // true if paper, false otherwise
    } else if (playerChoice === "Paper") {
        playerWon = (computerChoice === "Rock")
    } else {
        playerWon = (computerChoice === "Scissors")
    }

    // return result
    if (playerWon) {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}
