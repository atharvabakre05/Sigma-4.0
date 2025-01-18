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
let inp = document.querySelector('input');
// inp.addEventListener('keydown', function() {
//     console.log("A key was pressed");
// });

inp.addEventListener('keyup', function() {
    console.log("A key was released");
});
