const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const port = 7002;
const io = require('socket.io')(server);
const chatLib = require('./lib/chat.lib');
const newsLib = require('./lib/news.lib');
const mongoose = require('mongoose');
const allModel = require('./app/model/all.model');

const dbpath = "mongodb://localhost:27017/chat";
const mongo = mongoose.connect(dbpath, {useNewUrlParser: true });
mongo.then(() => {
  console.log('connected');
}).catch((err) => {
  console.log('err', err);
});

app.get('/chat', function(req, res){
  res.sendFile(__dirname + '/public/chat.html');
});

app.get('/news', function(req, res){
  res.sendFile(__dirname + '/public/news.html');
});

app.get('/', function(req, res){
  res.redirect('/chat');
});

chatLib.socketFunc(io);
newsLib.socketFunc(io);

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
});