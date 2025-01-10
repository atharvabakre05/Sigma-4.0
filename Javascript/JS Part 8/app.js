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

//Spread 
