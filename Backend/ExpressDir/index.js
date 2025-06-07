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

app.get("/search", (req, res) => {
    res.send("You contacted the search path");
});

app.get("/login", (req, res) => {
    res.send("You contacted the login path");
});

// app.get("*", (req, res) => {
//     res.send("This path doesn't exist");
// });

app.get(/.*/, (req, res) => {
    res.send("This path doesn't exist");
});
