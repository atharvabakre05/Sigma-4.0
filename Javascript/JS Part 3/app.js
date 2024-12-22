let msg = "    hello   ";
let password = prompt("Enter your password");
let newPass =  password.trim();
console.log(newPass);

//toLwercase and toUppercase
let name = "Atharva Bakre";
console.log(name);


//Method Chaining

// let sport = "Cricket";
// let newSport = sport.trim();
// console.log(newSport);
// newSport = newSport.toUpperCase();
// console.log(newSport);

let sport = "Cricket";
let newSport = sport.trim().toUpperCase();
console.log(newSport);

//Slice Method
let myFriends = "Shikhar, Gidbile etc";
console.log(myFriends);
console.log(myFriends.slice(0,12));

//Repeat and Replace
let myBrand = "Ghostrider";
myBrand.replace("rider", " ");

//Repeat
myBrand.repeat(3);


