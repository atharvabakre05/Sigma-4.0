let str = "atharva";
if(str[0] === 'a' && str.length > 3) {
    console.log("good string");

}
else{
    console.log("not a good string");   
}

let num = 12;
if((num % 3== 0)&& ((num+1 === 15) || (num-1 === 11))) {
    console.log("safe");
}
else{
    console.log("unsafe");
}

let number = 0;
if(number) {
    console.log("Number is not equal to 0");
}
else{
    console.log("Number is equal to 0");
}

//Switch Cases
let color = "red";

switch(color) {
    case "red":
        console.log("STOP IN THE NAME OF LAW");
        break;
    
    case "yellow":
        console.log("START YOUR MOTOR VEHICLES");
        break;

    case "green":
        console.log("GOOOOO");
        break;

    default:
        console.log("light is broken");
}



//Practice Question

let day = 2;
switch(day) {
    case 1:
        console.log("It's Sunday!");
        break;

    case 2:
        console.log("It's Monday!");
        break;

    case 3:
        console.log("It's Tuesday!");
        break;

    case 4:
        console.log("It's Wednesday!");
        break;


    case 5:
        console.log("It's Thursday!");
        break;

    case 6:
        console.log("It's Friday!");
        break;

    case 7:
        console.log("It's Saturday!");
        break;

    default:
        console.log("Invalid");

}

alert("something is wrong!");
console.error("This is how an error msg can be printed");
console.warn("This is how a warn msg is printed");


let firstName = prompt("Enter your name: ");
console.log(firstName);




