const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
	name 			: {type:String, required:true},
	usename   : {type:String, required:true, unique: true},
	mobile  	: {type:String, required:true},
	email     : {type:String, required:true},
	password  : {type:String, required:true}
});

mongoose.model('User', user);