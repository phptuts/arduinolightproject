var five = require("johnny-five");
var board = new five.Board();
var express = require('express');
var app = express();
var path = require('path');

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

board.on("ready", function() {
    var led = new five.Led(6);
    app.get('/light/:status', function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        if(JSON.parse(req.params.status)) {
            console.log('Turning Light On');
            led.on();
            res.send(JSON.stringify({status: 'on', success : true}));
        }
        else {
            console.log('Turning Light Off');
            led.off();
            res.send(JSON.stringify({status: 'off', success : true}));
        }
    });
});


app.listen(3000, function () {
    console.log('Press Control C to cancel the server');
});