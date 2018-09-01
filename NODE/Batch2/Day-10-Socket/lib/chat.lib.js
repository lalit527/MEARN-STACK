const events = require('events');
const eventEmitter = new events.EventEmitter();
const socketFunc = (io) => {
  const chat = io.of('/chat');
  let onlineUsers = [];

  eventEmitter.on('update online users', function(onlineUsers) {
    chat.emit('update online users', onlineUsers);
  });

  chat.on('connection', function (socket){
    console.log('a user connected');
    socket.on('user', function(user) {
      console.log('Connected user', user);
      onlineUsers.push(user);
      socket.user = user;
      socket.broadcast.emit('chat message', socket.user+" came online");
      eventEmitter.emit('update online users', onlineUsers);
    });
    socket.on('chat message', function(msg) {
      chat.emit('chat message', msg);
    });

    socket.on('disconnect', function() {
      console.log('User Disconnected');
      if (socket.user) {
        let index = onlineUsers.indexOf(socket.user);
        onlineUsers.splice(index, 1);
        socket.broadcast.emit('chat message', socket.user+" left the chat");
        eventEmitter.emit('update online users', onlineUsers);
      }
    });
  }); 

}

module.exports = {
  socketFunc
}

