const EventEmitter = require('events');

class CustomEvents extends EventEmitter {}

const events = new CustomEvents();

events.on('batch four', (a, b) => {
  setImmediate(() => {
    console.log('Batch Four Event, Multiplication', a*b);
  });
})

events.on('batch four', (a, b) => {
  setTimeout(() => {
    console.log('Batch Four Event, Addition', a+b);
  }, 0);
})

events.on('batch four', (a, b) => {
  setTimeout(() => {
    console.log('Batch Four Event, Subtraction', a-b);
  }, 1000);
})

events.on('batch four', (a, b) => {
  process.nextTick(() => {
    console.log('Batch Four Event, Division', a/b);
  });
})

events.emit('batch four', 5, 4);


console.log('Hello World');