function getComputerChoice () {
  const choices = ['Rock', 'Paper', 'Scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

// returns a titlecase formatted choice
function normalizeChoice (choice) {
  return choice.slice(0, 1).toUpperCase() + choice.slice(1).toLowerCase()
}

// returns result string: does a beat b?
// IMPORTANT: takes in PROPERLY FORMATTER strings (titlecase) for each choice
function playRound (playerChoice, computerChoice) {
  // validity checks
  const validChoices = ['Rock', 'Paper', 'Scissors']
  if (!validChoices.includes(playerChoice)) {
    return 'Invalid choice from Player! Try again'
  }

  if (!validChoices.includes(computerChoice)) {
    return 'Invalid choice from Computer! Try again'
  }

  // check for tie
  if (playerChoice === computerChoice) {
    return `Tie! You both picked ${playerChoice}.`
  }

  // decide if player won
  let playerWon

  if (playerChoice === 'Rock') {
    playerWon = (computerChoice === 'Paper') // true if paper, false otherwise
  } else if (playerChoice === 'Paper') {
    playerWon = (computerChoice === 'Rock')
  } else {
    playerWon = (computerChoice === 'Scissors')
  }

  // return result
  if (playerWon) {
    return `You win! ${playerChoice} beats ${computerChoice}`
  } else {
    return `You lose! ${computerChoice} beats ${playerChoice}`
  }
}

function game () {
  let computerScore = 0
  let playerScore = 0

  // loop til we break
  while (true) {
    const playerChoice = normalizeChoice(window.prompt('Choose your weapon of choice [Rock/Paper/Scissors]'))
    const computerChoice = getComputerChoice()
    // console.log(`[DEBUG] ${playerChoice}:${computerChoice}`)

    const result = playRound(playerChoice, computerChoice)
    console.log(result)

    if (result.startsWith('You win!')) {
      playerScore++
    } else if (result.startsWith('You lose!')) {
      computerScore++
    }

    // console.debug(`[DEBUG] score: ${playerScore}:${computerScore}`)

    if (playerScore >= 3) {
      console.log(`Player Won! ${playerScore}:${computerScore}`)
      break
    } else if (computerScore >= 3) {
      console.log(`Computer Won! ${playerScore}:${computerScore}`)
      break
    }
  }
}

game()
