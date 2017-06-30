var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

require('./db/db');

var VillainController = require('./controllers/VillainController');

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/villains', VillainController);

server.listen(3000, function(){
	console.log("Listening on port 3000");
});


