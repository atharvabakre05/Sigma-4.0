//For Loop

// for(let i = 0; i<=5; i++) {
//     console.log(i);
// }

// for(let i = 10; i>=1; i = i-4) {
//     console.log(i);
// }

// console.log("Printing the odd numbers");

// //Print all odd numbers 
// for(let i = 1; i<=15; i = i+2) {
//     console.log(i);
// }

// console.log("Backwards");

// //Printing backwards
// for(let i = 15; i>=1; i = i - 2) {
//     console.log(i);

// }

// //Print all the even numbers from 2 to 10
// console.log("Printing the even numvers from 2 to 10");

// for(i = 2; i<=10; i = i+2) {
//     console.log(i);
// }

// console.log("Backwards");

// for(i = 10; i>=1; i = i - 2) {
//     console.log(i);

// }


// console.log("Lets print tables");
// for(i = 5; i<=50; i = i + 5) {
//     console.log(i);
// }

// let n = prompt("Enter any number");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }

//Nested Loops

// for(let i = 1; i<=3; i++) {
  
//     console.log( i + ` Outer loop ${i}`);

//     for(let j=1;j<=3;j++) {
//         console.log(j);
//     }
// }

//While Loops
// let i = 1;
// while(i<=5) {
//     console.log(i);
//     i++;
// }

//Backwards
// let i = 5;
// while(i>=1) {
//     console.log(i);
//     i--;
// }

// let i = 0;
// while(i<=20) {
//     console.log(i);
//     i++;
// }


//Loops with arrays

// let fruits = ["mango", "orange", "chiku", "pinapple", "apple"];
// for(let i = 0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// }

// //Backwards 
// for(let i = fruits.length-1; i>=0; i--) {
//     console.log(i, fruits[i]);
// }


//Nested Loops with Nested Arrays 
//Eg1

// let heroes = [["Captain America", "Thor", "Hulk"], ["Wonder Women", "Superman", "Batman"]];
// for(i=0; i<heroes.length; i++) {
//     console.log(i, heroes[i]);
//     for(j=0; j<heroes[i].length;j++) {
//         console.log(`j=${j}, ${heroes[i][j]}`);

//     }
// }

//Eg 2:
// let students = [["Atharva", 95], ["Rasika", 94.5], ["Puppa", 100], ["Mummaa", 100]]; 
// for(i=0; i<students.length; i++) {
//     console.log(`info of studnet #${i+1}`);
//     for(j=0; j<students[i].length;j++) {
//         console.log(` ${j}, ${students[i][j]}`);

//     }

// }

//For-Of loop

// let fruits = ["Mango", "Orange", "Apple", "Lichi"];
// for(fruit of fruits) {
//     console.log(fruit);
// }


// for(char of "AtharvaBakre") {
//     console.log(char);
// }

//Nested for-of loop

let heroes = [["Spiderman", "Captain America", "Ironman"], ["Superman", "Wonder Women", "Batman"]] 
for(list of heroes) {
    console.log(list);
    for(hero of list) {
        console.log(`${hero}`);
    }
}