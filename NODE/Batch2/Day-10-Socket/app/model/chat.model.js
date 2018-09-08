const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let chatSchema = new Schema({
	userName 			: {type:String,default:'',required:true},
	group    			: {type:String,default:''},
	message  			: {type:String,default:''},
	createdOn     : {type:Date},
  active        : {type:Boolean},
  group         : { type: Schema.Types.ObjectId, ref: 'Group' },
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Chat', chatSchema);