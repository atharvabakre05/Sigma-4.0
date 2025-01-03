// //Q1
// function poem() {
//     console.log(`
//         पाऊस आला! पाऊस आला! 
//         ऐन दुपारी भवजा चमकलया 
//         कडाड कडकड िणाण वारा 
//         भजकडे भतकडे गारा, गारा. 
        
//         पाऊस आला! पाऊस आला! 
//         भदवाळीतला खचला भकल्ा 
//         िअुंकत सुटली सगळी कुत्ी 
//         आजोबांनी भशवली छत्ी! 
        
//         पाऊस आला! पाऊस आला! 
//         ‘उशीर, तयातच ्हा घोटाळा’, 
//         बाबा गेले करीत चडिड 
//         आईचे्ही भिजले पापड. 
        
//         पाऊस आला! पाऊस आला! 
//         आम्ही केला एकच भगल्ा 
//         ्हसत म्हणालया मॅडम कुट्ी 
//         ‘चला पळा, शाळेला सुट्ी!
//         `);
        
//     }

// poem();

// //Q2

// function rollDice () {
//     let rand = Math.floor(Math.random() * 6) + 1;
//     console.log(rand);
// }

// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();

// //Q3
// function avg(a,b,c) {
//     console.log("The average is", (a+b+c)/3);
// }
// avg(1,2,3);

// //Q4
// function table(a) {
//     for(let i=0; i<=10; i++) {
//         console.log(a*i);
//     }
// }
// table(4);

//Q5
// function getSum(n) {
//     sum  = 0;
//     for(let i = 1; i<=n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// getSum(5);
// console.log(getSum(5));

//Q6
let str = ["Hi", "This", "ismyfirst", "quitecomplexfunction", "program"];
function concat(str) {
    let result = "";
    for(let i = 0; i<str.length; i++) {
        result += str[i];
    }
    return result;

}
