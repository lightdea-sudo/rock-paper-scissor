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

//create two variables

/*create playRound function and add two parameters:
humanChoice and computerChoice, and use parametes to
take the human and computer choice as arguments inside function*/
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`draw, both chose ${humanChoice}`)
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`you win, ${humanChoice} beat ${computerChoice}.`)
    } else {
        console.log(`you lose, ${computerChoice} beat ${humanChoice}.`)
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);