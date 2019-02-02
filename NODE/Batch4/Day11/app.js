const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./app/routes');
const mongoConnect = require('./utils/database');
const user = require('./app/user/user.model');
const path = require('path');
// const userRoutes = require('./app/user/user.router')();


// app.use('/user/v1', router);
app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));

app.set('view engine', 'pug');
app.set('views',path.join(__dirname + '/app/views'));


app.use('/api/v1', router);

app.use(morgan('combined'));

mongoConnect(() => {
  app.listen(7002, () => {
    console.log('Server Started');
  });
});