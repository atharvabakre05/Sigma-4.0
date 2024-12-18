//Traffic Light System Indicator//
console.log("Suprabhat");
let color = "yellow";
if(color == "red") {
    console.log("Stop");
}

else if(color == "yellow") {
    console.log("Start your motor vehicle");
}

else if(color == "green") {
    console.log("Gooo");
}

else{
    console.log("Traffic light is broken");
}

let marks = 45;
if(marks >= 85) {
    console.log("A++");
}

else if(marks >= 70) {
    console.log("A");
}

else if(marks >= 33) {
    console.log("B");
}

else if(marks <= 33) {
    console.log("F");
}

let month = "December";

if(month === "December") {
    console.log("It's Winter");
}

else if(month === "March") {
    console.log("It's Summer");
}

else if(month === "August") {
    console.log("It's Rainy");
}

let size = "M";
if(size === "XL") {
    console.log("price is 250/-");
}
else if(size === "L") {
    console.log("price is 200/-");
}
else if(size === "M") {
    console.log("price is 100/-");
}
else if(size === "S") {
    console.log("price is 50/-");
}

//Nested if-else
if(marks >= 33){
    console.log("Pass");

    if(marks >= 80) {
        console.log("Outstanding");
    }

    else{
        console.log("A");
    }
}
else{
    console.log("Better luck next time");
}

//Logical operators

//And

// if(marks>33 && marks >= 75) {
//     console.log("Pass");
//     console.log("A+");
// }

//OR

// if(marks>=33 || marks>= 85) {
//     console.log("Pass");
//     console.log("A++");
// }


//NOT

if(!(marks<33)) {
    console.log("Pass");
}
