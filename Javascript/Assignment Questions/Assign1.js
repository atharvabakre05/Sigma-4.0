//Q1 

let num = 35;
if(num%10 === 0) {
    console.log("Good");
}
else{
    console.log("Bad");
}

//Q2
alert("Danger");

let firstName = prompt("enter your first name");
let age = prompt("enter your age number");
alert(`${firstName} is ${age} years old`);


//Q3
let months = 3;
switch(months) {
    case 1:
        console.log("Months in Quarter 1: January, February and March");
        break;

     case 2:
        console.log("Months in Quarter 2: April, May and June");
        break;
        
     case 3:
        console.log("Months in Quarter 3: July, August and September");
        break;

     case 4:
        console.log("Months in Quarter 4: October, November and December");
        break;

    default:
        console.log("Invalid Quarter");
}


//Q4
let str = "Atharva";
if((str == 'A'|| 'a') && (str.length)) {
    console.log("It's a golden string");
}
else{
    console.log("It's not a golden string");
}

//Q5
let a = 22, b = 45, c = 33;
if(a>b && a>c) {
    console.log("a is the largest number among the three");
}
else if(b>a && b>c) {
    console.log("b is the largest number among the three");
}
else{
    console.log("c is the largest number among the three");
}


//Q6
let x = "32", y = "47852";
if(x[x.length-1]== 2 && y[y.length-1]==2) {
    console.log("They have the same last digit 2")
}
else{
    console.log("They dont have");
}
