var mongoose = require('mongoose');
var userModel = mongoose.model('User');

module.exports.checkSessionr = function(req, res, next) {
  if (req.cookie.ensembleCookie && !req.session.user){
    res.clearCookie('ensembleCookie');
  } 
  next()
}


module.exports.checkLogin = function(req,res,next){
	if(req.session.user && req.cookie.ensembleCookie){
		next()
	}
	else{
		res.redirect('/user/login/');
	}

}