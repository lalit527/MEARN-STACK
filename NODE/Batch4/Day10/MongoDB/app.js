const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./app/routes');
const mongoConnect = require('./utils/database').mongoConnect;
// const userRoutes = require('./app/user/user.router')();


// app.use('/user/v1', router);
app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));

app.use('/api/v1/user', router);

app.use(morgan('combined'));

mongoConnect(() => {
  app.listen(7002, () => {
    console.log('Server Started');
  });
});