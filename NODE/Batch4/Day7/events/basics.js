const EventEmitter = require('events');

class CustomEvents extends EventEmitter {}

const events = new CustomEvents();

events.on('batch four', (a, b) => {
  console.log('Batch Four Event', a+b);
})

events.on('batch four', (a, b) => {
  console.log('Batch Four Event', a-b);
})

events.emit('batch four', 5, 4);

events.emit('batch four', 3, 4);

events.emit('batch four', 5, 8);



