function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3)
    switch (randomChoice) {
        case 0:
            return ("rock");
        case 1:
            return ("paper");
        case 2:
            return("scissors");
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Chose: Rock, Paper, or Scissors?");
    return humanChoice;
}


function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`draw, both chose ${humanChoice}`)
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`you win, ${humanChoice} beat ${computerChoice}.`)
    } else {
        computerScore++;
        console.log(`you lose, ${computerChoice} beat ${humanChoice}.`)
    }
}
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())    
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

    if (humanScore > computerScore) {
        console.log('you win! perfect')
    } else if (computerScore > humanScore) {
        console.log('you lose! try again')
    } else {
        console.log('draw game! hot')
    }
}
playGame()