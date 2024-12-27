// const favMovie = "The Avengers";

// let guess = prompt("Guess my favourite movie");

// while ((guess!=favMovie) && (guess!= "Quit")) {

//     console.log("Wrong! Please try again");

//     guess = prompt("Guess again!");
// }

// if(guess == favMovie) {

//     console.log("Kudos! You guesed it right!!");
// }
// else{

//     console.log("You quit..");
// }

//break keyword
// let i = 1;
// while(i<=5) {
//     console.log(i);
//     i++;
//     if(i==3) {
//         break;
//     }
// }
// console.log("We break at 3");


//Break keyword implementation in the game
const favMovie = "The Avengers";

let guess = prompt("Guess my Favourite Movie");

while(guess != favMovie){
    guess = prompt("Guess again!");

    if(guess == "quit") {
        console.log("You quit");
        break;
    }
}
if(guess == favMovie) {
    console.log("Kudos! You guessed it right");
    }
