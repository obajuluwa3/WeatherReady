var mongoose = require('mongoose');

var ClothingSchema = new mongoose.Schema({
	name: String,
	gender: String,
	weather: String
});

var clothingModel = mongoose.model('Clothing', ClothingSchema);

module.exports = clothingModel;