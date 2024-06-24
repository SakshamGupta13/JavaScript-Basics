// nested if else

// winning number

// 19 -> your guess is right 
// 17 -> too low 
// 21 -> too high

let winningNumber=19;
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
console.log("Your Guess is right");
}else{
    if(userGuess < winningNumber){
        console.log("Too low");
    }else{
        console.log("Too high");
    }
}