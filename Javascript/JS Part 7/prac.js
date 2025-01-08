//Q1
const square = (n) => n*n;
console.log(square(4));

//Q2

let id = setInterval(() => {
    console.log("Hello World");
},2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear Interval ran");
}, 10000);


