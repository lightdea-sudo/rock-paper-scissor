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
console.log(getComputerChoice())

/*crate function getHumanChoice, and then
return whats humanChoice using prompt*/
function getHumanChoice() {
    const humanChoice = prompt("Chose: Rock, Paper, or Scissors?");
    return humanChoice;
}
console.log(getHumanChoice())

//create two variables
const humanScore = 0;
const computerScore = 0;

/*create playRound function and add two parameters:
humanChoice and computerChoice, and use parametes to
take the human and computer choice as arguments inside function*/
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
}