const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require('./app/models/user.model');
const tweetModel = require('./app/models/tweet.model');
const commentModel = require('./app/models/comment.model');
const userController = require('./app/controllers/user.controller');
const tweetController = require('./app/controllers/tweet.controller');
const auth = require("./middleware/auth");
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const async = require('async');

app.use(logger('dev'));
app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));

app.set('view engine', 'pug');
app.set('views',path.join(__dirname + '/app/views'));

app.use(session({
	name: 'ensembleCookie',
	secret: 'ensembleSecret',
	resave: true,
	httpOnly: true,
	saveUninitialize: true,
	cookie: {secure: false}
}));
// app.use(auth.setLoogedInUser);

const dbpath = "mongodb://localhost/sample"
mongoose.connect(dbpath, () => {
  console.log('connected to db');
});

mongoose.connection.once('open', function(){
	console.log("database open");
});

userController.userController(app);
tweetController.tweetController(app);
app.get('/series', (req, res) => {
	async.series({
    one: function(callback) {
        setTimeout(function() {
            callback('null', 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2, 3);
        }, 100);
    }
	}, function(err, results) {
			if(err) {
				res.send({
					error: err,
					result: results
				});
			} else {
				res.send({
					result: results
				});
			}
			
	});
});


app.get('/waterfall', (req, res) => {
	async.waterfall([
		function(callback) {
			callback(null, 'one', 'two');
		},
		function(arg1, arg2, callback) {
			// arg1 now equals 'one' and arg2 now equals 'two'
			callback('null', 'three');
		},
		function(arg1, callback) {
				// arg1 now equals 'three'
				callback(null, 'done');
		}
	], function (err, result) {
    if(err) {
			res.send({
				error: err,
				result: result
			});
		} else {
			res.send({
				result: result
			});
		}
	});
});


app.get('/parallel-arr' , (req, res) => {
	[
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 100);
    }
	],
	// optional callback
	function(err, results) {
		if(err) {
			res.send({
				error: err,
				result: results
			});
		} else {
			res.send({
				result: results
			});
		}
	}
});

app.get('/parallel-obj' , (req, res) => {
	async.parallel({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 100);
    },
    two: function(callback) {
        setTimeout(function() {
            callback('null', 2);
        }, 100);
    }
	}, function(err, results) {
			if(err) {
				res.send({
					error: err,
					result: results
				});
			} else {
				res.send({
					result: results
				});
			}
	});
});

app.use(auth.setLoginUser);
app.listen('3002', () => {
  console.log('Server started on port 3002');
})