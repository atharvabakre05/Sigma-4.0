//EventListner and various functions 

// let btns = document.querySelectorAll('button');
// for(btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onclick = sayName;
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function () {
//         console.log("You double clicked me!");
//     } );

    

//     }



// function sayHello() {
//     alert("Hello!");
// }

// function sayName() {
//     alert("Apna College");
// }


//Event Listener application in an activity

// let btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     let h3 = document.querySelector('h3');
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     let div = document.querySelector('div');
//     div.style.backgroundColor = randomColor;

//     console.log("Color Updated");
// });

// function getRandomColor () {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

//Event Listner in other html tags 
// let p = document.querySelector('p');

// p.addEventListener('click', function() {
//     console.log("Paragraph was clicked");
// });

// let div = document.querySelector('.box');
// div.addEventListener('mouseenter', function() {
//     console.log("You entered the box");
// });

//This in EventListener
// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = 'red';
// }
// btn.addEventListener('click', changeColor);
// p.addEventListener('click', changeColor);
// h1.addEventListener('click', changeColor);
// h3.addEventListener('click', changeColor);

//Mouse Events
// let btn = document.querySelector('button');
// btn.addEventListener('click', function(event) {
//     console.log(event);
//     console.log("Button was clicked");
// });

// btn.addEventListener('dblclick', function(event) {
//     console.log(event);
//     console.log("Button was double clicked");
// });

//Keyboard Events
// let inp = document.querySelector('input');
// // inp.addEventListener('keydown', function() {
// //     console.log("A key was pressed");
// // });

// inp.addEventListener('keyup', function(event) {
//     console.log("A key was released");
//     // console.log(event);
//     console.log("key = ", event.key);
//     console.log("code = ",event.code);
// });

//Game
// inp.addEventListener('keydown', function(event) {
//     console.log("code = ", event.code);
//     if(event.code == "ArrowUp") {
//         console.log("Character moves forward");
//     }
//     else if(event.code == "ArrowDown") {
//         console.log("Character moves backward");
//     }
//     else if(event.code == "ArrowLeft") {
//         console.log("Character moves Leftside");
//     }
//     else if(event.code == "ArrowRight") {
//         console.log("Character moves Rightside");
//     }
//     else{
//         console.log("Wrong key");
//     }


// });

//Form
// let form = document.querySelector('form');
// form.addEventListener("submit", function() {
//     event.preventDefault(); //Helps to prevent redirecting yet the info gets submitted
//     alert("Form Submitted");
//     console.log("Succesfully Stayed at the default page");
// });

//Extracting form Data//
// let form = document.querySelector('form');
// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     // let user = this.elements[0];
//     // let pass = this.elements[1];

//     // console.log(user.value);
//     // console.log(pass.value);
    
//     // alert(`Hi ${user.value} your password is set to ${pass.value}`);
// });

// let user = document.querySelector("#user");
// user.addEventListener('change', function() {
//     console.log("change event");
//     console.log("final value = ", this.value);
// });

// user.addEventListener('input', function() {
//     console.log("input event");
//     console.log("final value = ", this.value);
// });

//Text Editor 
let inp = document.querySelector("input");
let p = document.querySelector("p");


inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
});