require('dotenv').config()
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');

require('./db/db');

var UserController = require('./controllers/UserController');

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
	response.render('login')
})

app.use('/users', UserController);

server.listen(3000, function(){
	console.log("Listening on port 3000");
});


