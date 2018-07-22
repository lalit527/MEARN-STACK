const EventEmitter = require('events');

class MyEvents extends EventEmitter {}

const event = new MyEvents();

// event.on('custom event', () => {
//   console.log('Raised a custom event-1');
// })
// event.on('custom event', () => {
//   console.log('Raised a custom event-2');
// })
// event.on('custom event', () => {
//   console.log('Raised a custom event-3');
// })
event.on('custom event', (a, b) => {
  console.log('Raised a custom event', a, b);
})

// event.emit('custom event');


event.emit('custom event');
console.log(5);
// event.emit('custom event', 2, 4);

// event.on('custom event', () => {
//   console.log('Raised a custom event');
// })

// console.log('==========++++++++++++++=========');
// event.emit('custom event');