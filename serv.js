const express = require('express');
const path = require("path");
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "homepage.html"));
    console.log();
});
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname,"script.js"))
});
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, "style.css"));
    console.log();
});

app.get('/even.html', (req, res) => {
    res.sendFile(path.join(__dirname, "even.html"));
    console.log();
});

app.get('/even', function(req, res) {
    console.log(req.query);
    var reqJson = req.query.name;
    var result = JSON.stringify({name:reqJson, even:(reqJson%2==0)});
    console.log("Sending  : " + result);
    res.send(result);
});


app.get('/homepage.html', (req, res) => {
    res.sendFile(path.join(__dirname, "homepage.html"));
    console.log();
});






var port = 3010;
app.listen(port, function(){
    console.debug("Server listening in port : " + port);

})