// // forEach
// let arr = [1,22,4,5,6,7,8,90,33];
// let print = function (el) {
//     console.log(el);
// };
// arr.forEach(print); //One way to use forEach

// arr.forEach(function(el) {
//     console.log(el);
// });

// arr.forEach((el) => {
//     console.log(el);
// });

// let arr = [{
//     name: "Atharva",
//     marks: 92
// }, {
//     name: "Rasika",
//     marks: 95

// }, {
//     name: "Aai",
//     marks: 93
// }];

// arr.forEach((student) => {
//     console.log(student.marks);
// });


//Map 
// let num = [1,2,3,4,5,6];
// let double = num.map((el) => {
//     console.log(el);
//     return el * 2;
// });

// let students = [{
//     name: "Atharva",
//     marks: 92
// }, {
//     name: "Rasika",
//     marks: 95

// }, {
//     name: "Aai",
//     marks: 93
// }];

// let gpa = students.map((el) => {
//     return el.marks/10;
// });

//Filter function 

// let nums = [1,3,4,5,66,778,11,2,34,55];
// let ans = nums.filter((el) => {
//     return el % 2 == 0; //even -> true, odd -> false
// });

//Every 
// arr = [2,4,6,8,10,13];
// arr.every((el) => (el%2 == 0));

// Reduce Function working
// let arr = [44,66,11,23,5,78,94,101];
// let finalValue = arr.reduce((res, el) => {
//     // console.log(res);
//     return res + el;  //To print the sum of all the numbers present in the array
// });
// console.log(finalValue);

//Finding Maximum no. using reduce function
// let max = arr.reduce((max,el) => {
//     if(max<el) {
//         return el;
//     } else {
//         return max;
//     }
// });
// console.log(max);

//Default Values

// function sum(a,b=3) { //Valid since the default value is appointed to "b"
//     return a + b;
// }

// function sum(a = 3, b) { //Invalid since the default value is given to the first argument
//     return a + b;
// }


//Spread Concept 
// let arr = [0,12,3,4,534,6,54,3,3,42434324234,4234324,245456,2,32,46,3,2];
// Math.min(...arr);

//Spread with array literals
// let even = [2,4,6,8,10];
// let odd = [5,7,9,11,13];
// let nums = [...odd, ...even];
// let str = [..."Atharva"];
// console.log(str);


//Spread with object literals
// const data = {
//     email: "ironman@gmail.com",
//     password: "abcd",
// };
// const dataCopy = {...data, id: 1234, county: "India"};

// let arr = [2,44,55,1,9,10,11];
// let obj1 = {...arr}; //obj1 = key: pair (Since key is not defined the key would be the index number)

// let str = ("Atharva");
// let obj2 = {...str};



//Rest Concept in JS
// function sum(...args) {      //args means arguments
//     for(let i=0;i<args.length;i++) {
//         console.log("This is the value that you gave us: ", args[i]);
//     }
// }

// function min() {
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1); //Will not be able to apply since arguements is a collection but not an array
// }

//If we use rest we can store the values of function into an array and perform different operations on to it.
// function sum(...args) {
//     return args.reduce((sum,el) => sum+el);
// }
// function min(msg,...args) {
//     console.log(msg);
//     return args.reduce((min,el) => {
//         if(min>el) {
//             return el;
//         } else{
//             return min;
//         }
//     })
// }

//Destructuring 
// let names = ["tony", "steve", "bruce", "peter", "xyz", "pyq", "abc"];
// let [runnerUp, winner, ...others] = names;

//Destructing in objects
// let student = {
//     name: "Atharva",
//     age: 19,
//     subject: "Coding",
//     hobby: "Bowler",
//     username: "atharvabakre05",
//     password: "okok",
// }

// let {username: user, password: secret, hobby: sport, city: place = "Nagpur"} = student;