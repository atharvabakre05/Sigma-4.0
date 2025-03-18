const max = prompt("Enter the max number");

const random = Math.floor(Math.random()* max)+1;

let guess = prompt("Guess the number");

while(true) {
    if(guess=="quit") {
        console.log("You quit");
        break;
    }

    if(guess==random) {
        console.log("Congragulations! You guessed the correct number", random);
        break;
    }

    else if(guess>random) {
        guess = prompt("hint: Your guess is too large. Please try aagin")
    }

    else{
        guess = prompt("Your guess was too small. Please try again");
    }
}