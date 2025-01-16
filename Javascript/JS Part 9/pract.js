let p = document.createElement('p');
p.innerText = "Hey Im Red";
body = document.querySelector("body").appendChild(p);
p.classList.add('red');

let h3 = document.createElement('h3');
h3.innerText = "Im a blue h3!";
body.appendChild(h3);
h3.classList.add('blue');

let div = document.createElement('div');
let h1 = document.createElement('h1');
let par = document.createElement('p');

h1.innerText = "Im in a div";
par.innerText = "Me too!";

div.appendChild(h1);
div.appendChild(par);
div.classList.add('border');
document.querySelector('body').append(div);




