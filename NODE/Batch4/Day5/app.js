const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./app/routes');
// const userRoutes = require('./app/user/user.router')();

let foo = (req, res, next) => {
  console.log('Foo Called');
  next();
}

let bar = (req, res, next) => {
  console.log('Bar Called');
  next();
}

let getInfo = (req, res, next) => {
  console.log(req.connection.remoteAddress);
  // res.send('You are not authenticated');
  next();
}

app.use([getInfo]);

// app.use('/user/v1', router);
app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));

app.use('/api/v1/user', router);

app.use(morgan('combined'));

app.listen(7002, () => {
  console.log('Server Started');
})