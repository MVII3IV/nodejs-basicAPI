var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.port || 80;

app.listen(port, function(){
    console.log('Listening on port: ' + port);
});


var movieRouter = require('./routes/movieRouter')();
app.use('/api/movies', movieRouter);



app.get('/', function(req, res){
    res.send('Welcome to my API');
});