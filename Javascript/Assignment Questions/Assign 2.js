//Q1

let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans);

//Q2

let answer = arr.slice(1, arr.length);
console.log(answer);

// Q3

// let str = prompt("Enter any string");
// if(str.length == "0") {
//     console.log("It's a blank string");
// }
// else{
//     console.log("It's not");
// }

// Q4

let str = "myStartup";
if(str[0] == str[0].toLowerCase()) {
    console.log("It's in lowerCase");
}
else{
    console.log("It's not in lowercase");
}

//Q5
let shabda = "       dafh         ";
shabda = shabda.trim();
console.log(shabda);

//Q6
let array = ["knadv", "aoiv", "svdn"];
let item = "knadv";
let idxe = array.indexOf(item);
if(idxe != -1) {
    console.log("Element found ");
    console.log(idxe);
}
else{
    console.log("not found");

}

