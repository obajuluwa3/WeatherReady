var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', function(request, response){
	response.render('register')
});

router.post('/', function(request, response){
	var user = new User({name: request.body.name,
								username: request.body.username,
								password: hash,
								city: request.body.city,
								state: request.body.state,
								clothing: request.body.clothing,
								pictureurl: request.body.pictureurl
								});
	user.save();
	response.json(user);
});

module.exports = router;


