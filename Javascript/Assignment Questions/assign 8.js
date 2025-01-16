//Q1
let button = document.createElement('button');
let input = document.createElement('input');

button.innerText = "Click me!";
let body = document.querySelector('body');
body.appendChild(button);
body.appendChild(input);

//Q2
input.placeholder = "username";
button.setAttribute('id', 'btn');

//Q3
let btn = document.querySelector("#btn");
btn.classList.add('bg');

//Q4
let h1 = document.createElement('h1');
h1.classList.add('underline');
h1.innerText = "DOM Practice";
body.appendChild(h1);

//Q5
let p = document.createElement('p');
p.innerHTML = "Apna College <b>Sigma</b> Practice"; 
body.appendChild(p);
