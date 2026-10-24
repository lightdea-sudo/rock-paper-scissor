/*create function getComputerChoice, and then
return randomly value number use Math.random,
the number should be string using switch (rock, paper, scissors)*/
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

/*crate function getHumanChoice, and then
return whats humanChoice using prompt*/
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
    //round 1
    playRound(getHumanChoice(), getComputerChoice())
    //round 2
    playRound(getHumanChoice(), getComputerChoice())
    //round 3
    playRound(getHumanChoice(), getComputerChoice())    
    //round 4
    playRound(getHumanChoice(), getComputerChoice())
    //round 5
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