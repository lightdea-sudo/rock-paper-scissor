//Step 2
//1. create a new function named getComputerChoice
function getComputerChoice() {
    const computerChoice = Math.floor((Math.random() * 3));
    return computerChoice === 1? "rock" : computerChoice === 2? "paper" : "scissors";
}
console.log(getComputerChoice())
//2.add math random to 3, in index its starting at 0 to 3
//3.add return, and read about ternary
//4.console.log the function

//Step 3
function getHumanChoice() {
    const humanChoice = prompt("rock, paper, or, scissors?")
    return humanChoice.toLowerCase()
}
console.log(getHumanChoice())
