const EventEmitter = require('events');

class MyEvents extends EventEmitter {}

const event = new MyEvents();

// event.on('custom event', () => {
//   console.log('Raised a custom event-1');
// })

module.exports.bar = function() {
  return event;
}

module.exports.foo = function() {
  event.emit('custom event');
  console.log('Emitted');
}
