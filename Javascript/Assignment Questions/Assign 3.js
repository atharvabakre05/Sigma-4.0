//Q1
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// for(let i=0; i<arr.length; i++) {
//     if(arr[i]==2) {
//         arr.splice(i, 1);
//     }
// }

// console.log(arr);

//Q2
// let num = 93487394853495;
// let count = 0;
// let copy = num;
// while(copy>0) {
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

//Q3

// let number = 123;
// let sum = 0;
// let copy = number
// while(copy>0) {
//     let digit = copy%10;
//     sum += digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

//Q4
// let n = prompt("Enter any number");
// console.log(n);
// factorial = 1;
// for(let i=1; i<=n; i++) {
//     factorial *= i;
// }
// console.log(`factorial of ${n} is ${factorial}`);

//Q5
let arr = [1,2,10,55,66,98,509];
let largest = 0;
for(let i=0;i<arr.length;i++) {
    if(largest<arr[i]) {
        largest = arr[i];

    }
}
console.log(largest);