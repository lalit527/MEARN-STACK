const userModel = require('./../app/user/user.model');

const verfiyLoggedInUser = (req, res, next) => {
  console.log(req.cookies);
  if (req.cookies && req.cookies.batch4Cookie) {
    console.log('In Middleware', 'Cookie is set');
    console.log('In Middleware', req.session.user);
    return next()
  } 
  res.send('User Not Valid');
}

const verifyAuthToken = (req, res, next) => {
  if (!req.cookies || !req.cookies['x-auth-token']) {
    res.send(403, 'Unauthorized User');
  }
  let token = req.cookies['x-auth-token'];
  userModel.findByToken(token).then((user) => {
    req.user = user;
  }).catch((err) => {
    res.send(403, 'Unauthorized User');
  });
  next();
}

module.exports = {
  verfiyLoggedInUser,
  verifyAuthToken
}