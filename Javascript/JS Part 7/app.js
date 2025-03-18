// const student = {
//     name: "Atharva",
//     age: 19,
//     eng: 95,
//     maths: 92,
//     phy: 89,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.maths + this.phy)/3;
//         console.log(`This is the average marks of ${this.name} = ${avg}`);
//     }
// }

// console.log("Hello");
// console.log("Hello");
// // let a = 5;
// try{       
//     console.log(a);
// }
// catch(error) {
//     console.log("Caught an error...a is not defined");
//     console.log(error);
// }
// console.log("Hello2");
// console.log("Hello2");

//Arrow Function 
// const sum = (a,b) => {
//     console.log(a+b);
// }

// const cube = (n) => {
//     console.log(n*n*n);
// }

// const pow = (c, d) => {
//     console.log(c**d);
// }

//Arrow Function Implicit
// const sum = (a,b) => a +  b;

// const cube = (n) => n*n*n;

// const pow = (c, d) => c**d;


// setTimeOut Function 
// console.log("Hi There");
// setTimeout(() => {
//     console.log("Bakre's Residence");
// }, 1000);
// console.log("Welcome to");

// console.log("Hi There");
// let id = setInterval(() => {
//     console.log("Bakre's Residence");
// }, 2000);
// console.log(id);


// let id2 = setInterval(() => {
//     console.log("Hello World");
// }, 3000);
// console.log(id2);


//To stop the recursion we have to use clearInterval();




//This with ArrowFunction and Normal function 

const student = {
    name: "Atharva",
    age: 19,
    marks: 95,
    prop: this, //Global Scope      
    getName: function () { //Normal Function
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);   //Parent's scope (lexcial) --> window
        return this.marks;
    },
    getInfo1: function () {
        setTimeout( () => {
            console.log("Apna College");  //student
        }, 2000);
    },
    getInfo1: function () {
        setTimeout( function () {
            console.log("Apna College"); //window
        }, 2000);

    }
};
