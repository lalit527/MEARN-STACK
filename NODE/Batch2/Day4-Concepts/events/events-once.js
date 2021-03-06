const EventEmitter = require('events');

class MyEvents extends EventEmitter {}

const event = new MyEvents();

event.once('custom event', () => {
  console.log('Raised a custom event-1');
})
event.on('custom event', () => {
  console.log('Raised a custom event-2');
})
// event.on('custom event', () => {
//   console.log('Raised a custom event-3');
// })

event.emit('custom event');
event.emit('custom event');
event.emit('custom event');