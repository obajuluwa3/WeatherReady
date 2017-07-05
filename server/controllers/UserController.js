var express = require('express');
var router = express.Router();
var Villain = require('../models/Villain');

router.get('/', function(request, response){
	Villain.find(function(err, villains){
		console.log(villains);
		response.render('home', {villainsArray: villains});
	});
});

router.post('/', function(request, response){
	var villain = new Villain({name: request.body.name,
								movie: request.body.movie,
								power: request.body.power,
								height: request.body.height});
	villain.save();
	response.redirect('/villains');
});

module.exports = router;


