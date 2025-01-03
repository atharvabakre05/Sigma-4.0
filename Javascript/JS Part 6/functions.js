// function hello () {
//     console.log("Hello I am Atharva");
// }

// hello();

// function advFunc () {
//     let age = 18;
//     if(age>=18) {
//         console.log("Adult");
//     }
//     else{
//         console.log("You are a kid!");
//     }
// }

// advFunc();

// function Omago () {
//     let i = 1;
//     while(i<=5) {
//         console.log(i);
//         i++
//     }
// }

// Omago();

// //Functions with arguements 

// function printName(name) {    //Argument
//     console.log(name);
// }
// printName("Atharva"); //parameter which is stored in the argument 

// //Eg 2
// function printInfo(name, age) {
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("Atharva", 19);
// printInfo("Rasika", 24);

// //Eg 3

// function sum (a, b) {
//     console.log("The sum is", a+b);
// }

// sum(2,4);


// //Function return
// function done(a, b) {
//     return a + b;
// }
// let d = done(4,7);
// console.log(d);

//After using the return in the function, we cant define/make any more changes in it.
function isAdult(age) {
    if(age>=18) {
        return "adult";
    }
    else{
        return "not adult";
    }
    console.log("Bye Bye");
}
