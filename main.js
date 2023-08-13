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
function compareChoices(a, b) {
    if (a === b) {
        return "Tie! You both picked the same choice."
    }

    if (!a in ["Rock", "Paper", "Scissors"]) {
        return "Invalid Choice! Try again"
    }
    if (!b in ["Rock", "Paper", "Scissors"]) {
        return "Invalid Choice! Try again"
    }
    switch (a) {
        case "Rock":
            b == "Scissors"
            break
    }
}
