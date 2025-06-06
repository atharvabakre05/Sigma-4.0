const express = require ("express");
const app = express();
// console.dir(app);
let port = 8080;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.use((req, res) => {
    console.log("request received");
    // console.dir(req);
    // res.send("This is a basic response");
// res.send({
//     fruit: 'Apple',
//     color: 'Red',
// });

    let code = "<h1>Fruits<ul><li>Orange</li><li>Mango</li></ul></h1>"
    res.send(code);
}); 