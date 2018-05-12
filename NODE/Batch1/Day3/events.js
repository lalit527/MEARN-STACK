const EventEmitter = require('events');

class MyEvents extends EventEmitter {}

const event = new MyEvents();

event.on('custom', (data) => {
  
  console.log(data);
});

event.on('custom', (data) => {
  console.log(data);
});

event.on('custom', (data) => {
  
  console.log(data);
});

event.on('custom', (data) => {
  console.log(data);
});

event.on('error', (data) => {
  console.log(data);
});

event.emit('custom', 'Hello World');