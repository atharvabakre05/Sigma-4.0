// Q1

// let arr = [1,2,3,4,5,6,7,8,9,10];
// const square = arr.map((el) => {
//     return el*el;
// });
// let sum = square.reduce((sum, el) => sum + el);
// console.log(sum);
// let avg = sum/arr.length;
// console.log(avg);

//Q2
// let arr = [1,2,4,5,6,7,8,9];
// const nArr = arr.map((el) => el + 5);

//Q3
// let strings = ["atharva", "rasika", "varsha", "aniruddha", "madhuri"];
// console.log(strings.map((string) => string.toUpperCase()));

//Q4
// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v *2),
// ];
// doubleAndReturnArgs([1,2,3], 4, 4); //[1,2,3,8,8]
// doubleAndReturnArgs ([2], 10, 4); //[2, 20, 8]

//Q5
// const mergeObjects = (obj1, obj2) => ({...obj 1, ...obj2});
// mergeObjects({a:1,b:2}, {c:3,d:4});
