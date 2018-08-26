var mongoose = require('mongoose');
var userModel = mongoose.model('User');

module.exports.checkSession = function(req, res, next) {
  if (req.cookie && req.cookie.ensembleCookie && !req.session.user){
    res.clearCookie('ensembleCookie');
  } 
  next()
}


module.exports.checkLogin = function(req,res,next){
	if(req.cookies.ensembleCookie && req.session.user ){
		next()
	}
	else{
		res.redirect('/user/login/');
	}

}