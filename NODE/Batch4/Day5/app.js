const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const routes = router();

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
  next();
}

app.use([getInfo]);

app.use('/user/v1', routes);

app.use(morgan('combined'));

app.listen(7002, () => {
  console.log('Server Started');
})