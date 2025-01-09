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
let arr = [44,66,11,23,5,78,94,101];
let finalValue = arr.reduce((res, el) => {
    // console.log(res);
    return res + el;
})
console.log(finalValue);