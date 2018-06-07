const app = require('express')();
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./config/config')
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new FacebookStrategy({
  clientID: config.facebookClient,
  clientSecret: config.facebookSecret,
  callbackURL: "http://localhost:7725/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
  // User.findOrCreate(..., function(err, user) {
  //   if (err) { return done(err); }
  //   done(null, user);
  // });
  console.log(accessToken, refreshToken, profile, done);
  done(null, 'Lalit');
}
));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/success',
                                      failureRedirect: '/error' }));


app.get('/', (req, res) => {
  res.send({data: 'Hello World'});
});

app.get('/success', (req, res) => {
  res.send({data: 'Logged In'});
});

app.get('/error', (req, res) => {
  res.send({data: 'Error'});
});

app.listen(7725, () => {
  console.log('Started Server');
})