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
// function isAdult(age) {
//     if(age>=18) {
//         return "adult";
//     }
//     else{
//         return "not adult";
//     }
//     console.log("Bye Bye");
// }

//Scopes
// let greet = "hello"; // Global scope

// function changeGreet () {
//     let greet = "namaste"; // Function Scope
//     console.log(greet);

//     function innerGreet() { //lexical Scope
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();


//Function Expressions
// let sum = function(a,b) {
//     return a+b;
// }

// let hello = function() {
//     console.log("Hello");
// }

//High Order Function

// function multipleGreet(func, count) { //Higher Order function
//     for(let i=1; i<=count; i++) {
//         func();
//     }
// }
// function greet() {
//     console.log("Hello");
// }
// multipleGreet(greet, 4);

//High Order Function Returns a function



function oddOrEvenFactory(request) {
    if(request == "odd") {
        let odd = function(n) {
            console.log(!(n%2==0));
            
        }
        return odd;
    } else if(request == "even") {
        let even = function(n) {
        console.log(n%2==0);
        }
        return even;
    } else{
        console.log("Wrong request");
    }
}

let request = "odd"; //even



