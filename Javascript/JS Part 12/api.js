// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         return res.json() 
//     })
//     .then((data) => {
//         console.log("data1 = ", data.fact);
//         return res.json()
//     })
//     .then

//     .catch((err) => {
//         console.log("ERROR -", err);

//     });

let url = "https://catfact.ninja/fact";
async function getFacts() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
}