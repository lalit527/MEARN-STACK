const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require('./app/models/user.model');
const tweetModel = require('./app/models/tweet.model');
const userController = require('./app/controllers/user.controller');
const tweetController = require('./app/controllers/tweet.controller');

app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));


const dbpath = "mongodb://localhost/sample"
mongoose.connect(dbpath, () => {
  console.log('connected to db');
});

mongoose.connection.once('open', function(){
	console.log("database open");
});

userController.userController(app);
tweetController.tweetController(app);
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen('3002', () => {
  console.log('Server started on port 3002');
})