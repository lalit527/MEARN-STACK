const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let group = new Schema({
	name 			: {type:String, required:true},
  created   : {type:String, required:true},
  user      : { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Group', group);