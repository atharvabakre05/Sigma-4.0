//Q1
let arr = [1,4,55,67,88,901,101,2398];
const arrayAverage = (arr) => {
    let total = 0
for(let numbers of arr) {
    total += numbers;
}
return total/arr.length;
};
console.log(arrayAverage(arr));

//Q2
let num = 5;
const isEven = (num) => num % 2 == 0;

//Q3
const object = {
    message: "Hello World",

    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);
