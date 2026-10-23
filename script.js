//1. create a new function named getComputerChoice
function getComputerChoice() {
    const choice = Math.floor((Math.random() * 3));
    return choice === 1? "rock" : choice === 2? "paper" : "scissors";
}
console.log(getComputerChoice())
//2.add math random to 3, in index its starting at 0 to 3
//3.add return, and read about ternary
//4.console.log the function



