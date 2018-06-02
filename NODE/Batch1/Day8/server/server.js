const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const io = require('socket.io')(server);
const port = 7725;  // process.env;
const path = require('path');

app.use('/',express.static(path.resolve(__dirname,'./../public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + './../public/index.html');
}) ;

// socket


server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

io.on('connection', function (socket) {
  console.log(socket);
  socket.broadcast.emit('new user', 'A new user has connected');
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('new message', function (data) {
    console.log('A new Event', data);
    io.emit('new message', data);

  });

  socket.on('disconnect', function() {
    console.log('A user has  disconnected');
  });
});