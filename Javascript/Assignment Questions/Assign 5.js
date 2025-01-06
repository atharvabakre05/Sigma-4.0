// //Q1
// let arr = [1,4,7,10,99,100,9292];
// let num = 33;
// function getElements(arr, num) {
//     for(let i = 0; i<arr.length;i++) {
//         if(arr[i]>num) {
//             console.log(arr[i]);
//         }   
//     }
// }

//Q2
// let str = "abscoisnaifeslfhnaadskcbamcnaskjcakcbaskjcznaskfjheiufhwas";
// function getUnique(str) {
//     let ans = "";
//     for(let i = 0;i<str.length;i++) {
//         let currChar = str[i];
//         if(ans.indexOf(currChar) === -1) {
//             ans += currChar;
//         }

//     }
//     return ans;
// }
// getUnique (str);

//Q3
// let country = ["India", "Australia", "Italy"];
// function longName(country) {
//     let idx = 0;
//     for(let i = 0; i<country.length; i++) {
//         let adc = country[idx].length;
//         let currName = country[i].length;
//         if(currName>adc) {
//             idx = i;
//         }
//     }
//     return country[idx];

// }
// longName(country);

//Q4
// let str = "atharva";
// function vowel(str) {
//     let count = 0;
//     for(let i = 0; i<str.length; i++){
//         if(
//             str.charAt(i) == "a" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) == "o" ||
//             str.charAt(i) == "u" 
//         )
//         {
//             count++;
//         }

//     }
// return count;
// }

// vowel(str);


//Q5
let start = 100;
let end = 200;
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random()* diff) + start;
}