//Q1
// let inp = document.querySelector("input");
// // inp.addEventListener('mouseout', function() {
// //     console.log("You hoverd using the mouse");
// // });

// // inp.addEventListener('keypress', function() {
// //     console.log("You pressed the key");
// // });
// let div = document.querySelector("div");
// div.addEventListener('scroll', function() {
//     console.log("You scrolled ");
// });

//Q2
// let div = document.querySelector(".box");
// let btn = document.createElement('button');
// div.appendChild(btn);
// btn.textContent = 'New Button';

// btn.addEventListener("click", function() {
//     btn.style.backgroundColor = "green"; // Change background color of the div
// });

//Q3
let h2 = document.querySelector("h2");
let inp = document.querySelector('input');

inp.addEventListener('keypress', function() {
    inp.value = inp.value.replace(/[^A-Za-z]/g, '');
    console.log(inp.value);
    h2.innerText = inp.value;  // Update h2 text with input value
});

