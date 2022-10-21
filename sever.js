const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.get('/introduce', function(req, res) {
    res.sendFile(__dirname + '/introduce.html')
});

app.get('/moon', function(req, res) {
    res.sendFile(__dirname + '/moon.html')
});

app.get('/saturn', function(req, res) {
    res.sendFile(__dirname + '/saturn.html')
});

app.get('/solar', function(req, res) {
    res.sendFile(__dirname + '/solar.html')
});

app.get('/telescope', function(req, res) {
    res.sendFile(__dirname + '/telescope.html')
});