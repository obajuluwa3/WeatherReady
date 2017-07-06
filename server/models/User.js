var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	username: String,
	password: String,
	zipcode: Number,
	gender: String,
	pictureurl: String
});

var userModel = mongoose.model('User', UserSchema);

module.exports = userModel;