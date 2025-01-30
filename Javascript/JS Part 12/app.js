//Async function

// async function greet() {
//     return "hello!";
//     throw "weak connection";
// }

// greet()
//     .then((result) => {
//         console.log("Promise was resolved");
//         console.log("Result was : ", result);
//     })

//     .catch((err) => {
//         console.log("Promise was rejected with error: ", err)
//     });


//Async function with awaut keyword  (It can only be used in async functions)

// function getNum() {
//     return new Promise ((resolve, rejected) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo() {
//     getNum();
//     getNum();
//     getNum();
// };


// //JS Part 11 code being modified using async/await function

// h1 = document.querySelector('h1');
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*5) +1;
//             if(num > 3) {
//                 reject("promise rejected");
//             }
            
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         }, delay);

//     });
// }

// async function demo() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("green", 1000);
//         await changeColor("darkgrey", 1000);
//         await changeColor("orange", 1000);
//         changeColor("skyblue", 1000);
//     } catch (err) {
//         console.log("caught error");
//         console.log(err);
//     }

//     let a = 5;
//     console.log(a);
//     console.log("New number: ", a+3);
// }

// APIs and Json files

let jsonRes = '{"fact":"Two members of the cat family are distinct from all others: the clouded leopard and the cheetah. The clouded leopard does not roar like other big cats, nor does it groom or rest like small cats. The cheetah is unique because it is a running cat; all others are leaping cats. They are leaping cats because they slowly stalk their prey and then leap on it.","length":354}';
let validRes = JSON.parse(jsonRes);
console.log(validRes);