var mongoose = require('mongoose');
var connectionString = 'mongodb://obajuluwa3:asdfghjkl003@ds153412.mlab.com:53412/odunayodb'

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
	console.log("connected to "+ connectionString);
})

mongoose.connection.on('error', function(error){
	console.log("MongoDB error "+ error);
})

mongoose.connection.on('disconnected', function(){
	console.log("Mongoose disconnected from " + connectionString);
})