var mongoose = require('mongoose');

var VillainSchema = new mongoose.Schema({
	name: String,
	movie: String,
	power: String,
	height: Number
});

var villainModel = mongoose.model('Villain', VillainSchema);

module.exports = villainModel;