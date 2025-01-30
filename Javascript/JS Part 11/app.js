// function hello() {
//     console.log("Hello! I am inside Hello Function");
//     console.log("Hello");
// };

// function demo() {
//     console.log("Calling hello function");
//     hello();
// };

// console.log("Calling Demo Function");
// demo();
// console.log("Done! Bye");

// function one () {
//     return 1;
// }

// function two () {
//     return one() + one();
// }

// function three() {

//     let ans = 
//     two() + one();
//     console.log(ans);
// }

// three();



//Callback Hell
h1 = document.querySelector('h1');
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        },delay);

    })
}

changeColor("red", 1000) 
.then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
})

.then(() => {
    console.log("orange color was changed successfully");
    return changeColor("green", 1000);
})

.then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
})

// changeColor('red' ,1000,() => {
//     changeColor('orange', 1000)() => {
//         changeColor('green', 1000);
//     });

// });

//Promises
// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed>4) {
//         success();
//     } else{
//         failure();
//     }
// }

// savetoDb( 
//     "Atharva", 
//     () => {
//         console.log("Success: Your data was successfully added");
//         savetoDb(
//             "Atharva", 
//             () => {
//                 console.log("success2: Data was saved");
//                 savetoDb(
//                     "Hello World",
//                     () => {
//                         console.log("Success3: Data was added");
//                     },
//                     () => {
//                         console.log("Failure3: Data wasn't saved");
//                     }
//                 )
//             }, 
//             () => {
//                 console.log("failure2: Data wasn't saved ")
//             }
            
//         )
//     }, 
//     () => {
//         console.log("Failure: Data wasn't added");
//     }
// );


//Reject and Resolve
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random()* 10) + 1;
//         if(internetSpeed>4) {
//             resolve("success: data was resolved");
//         }else{
//             reject("failure: weak connection");
//         }
//     });
// }
// savetoDb("Atharva") 
//     .then( (result) => {
//         console.log("Data1 was saved.");
//         console.log("result of promise: ", result);
//         return savetoDb("Hello world");
//     })

//     .then((result) => {
//         console.log("Data2 was saved");
//         console.log("result of promise: ", result);
//         return savetoDb("Rasika");
//     })

//     .then((result) => {
//         console.log("Data3 was saved");
//         console.log("result of promise: ", result);
//     })
   
//     .catch( (error) => {
//         console.log("promise was rejected");
//         console.log("result of promise: ",error );

//     });



