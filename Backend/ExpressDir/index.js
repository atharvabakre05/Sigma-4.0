const express = require ("express");
const app = express();
// console.dir(app);
let port = 8080;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
     
app.get("/", (req, res) => {
    res.send("Hello I am root path");
});

     
app.get("/:username/:id",(req, res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1> Welcome to this page of @${username} with id:${id}<h1>`
    res.send(htmlStr); 
});

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q) {
        res.send(`<h1>Nothing searched</h1>   `);
    }
    res.send(`<h1>These are the search results for the desired query ${q}</h1>`);
});


// app.get(/.*/, (req, res) => {
//     res.send("This path doesn't exist");
// });