var express = require('express');
var router = express.Router();
var User = require('../models/User');
var bcrypt = require('bcrypt');

router.get('/', function(request, response){
	response.render('login')
});

router.post('/profile', function(request, response) {
// 1. find the user with the corresponding email address
  // 2. check if the password on that user matches
  //    the password from the request (hashed)
  User.findOne({username: request.body.username}, function(err, user){
    // check if there is a user that was returned from the DB
    if(user){
      bcrypt.compare(request.body.password, user.password, function(error, match){
        if(match === true){
          // request.session.loggedIn = true;
          response.redirect("/profile" + user._id);
        }else{
          response.redirect('/users');
        }
      })
    }else{
      response.redirect('/users');
    }
  })
})

router.get('/register', function(request, response){
	response.render('register')
});

////////////////////////////////////////
////////////////////////////////////////
////////////// JSON API ////////////////
////////////////////////////////////////
////////////////////////////////////////

router.get('/all', function(request, response){
	User.find(function(error, users) {
		response.json(users)
	})
})

router.get('/:id', function(request, response) {
	var id = request.params.id
	User.findById(function(error, user) {
		response.json(user)
	})
})

router.post('/register', function(request, response){
	bcrypt.hash(request.body.password, 10, function(error, hash){
		var user = new User({firstname: request.body.firstname,
								lastname: request.body.lastname,
								username: request.body.username,
								password: hash,
								city: request.body.city,
								state: request.body.state,
								gender: request.body.gender,
								pictureurl: request.body.pictureurl
								});
	user.save();
	response.json(user);
	})
});

router.patch('/:id', function(request, response) {
	var id = request.params.id
	User.findById(function(error, user) {
		user.firstname = request.body.firstname;
		user.lastname = request.body.lastname;
		user.username = request.body.username;
		user.password = request.body.password;
		user.city = request.body.city;
		user.state = request.body.state;
		user.gender = request.body.gender;
		user.pictureurl = request.body.pictureurl;
		user.save()
		response.json(user)
	})
})

router.delete('/:id', function(request, response) {
	var id = request.params.id
	User.findById(function(error, user) {
		user.delete();
	})
})

module.exports = router;


