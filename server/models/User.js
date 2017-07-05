var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	username: String,
	password: String,
	city: String,
	state: String,
	clothing: String,
	pictureurl: String
});

var userModel = mongoose.model('User', UserSchema);

module.exports = userModel;