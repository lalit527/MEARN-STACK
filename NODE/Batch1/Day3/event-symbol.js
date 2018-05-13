const EventEmitter = require('events');

class MyEvents extends EventEmitter {}

const event = new MyEvents();

event.on(Symbol(), (data) => {
  
  console.log(data);
});

event.on(Symbol(), (data) => {
  console.log(data);
});
let i = Symbol();

event.on(i, (data) => { 
  console.log(data);
});
event.emit(i, 'Hello World');

event.on(Symbol(), (data) => { 
  console.log(data);
});
event.emit(Symbol(), 'Hello World');

console.log("=================");
event.on('custom', (data) => { 
  return new Error('error from evet');
  console.log(data);
});
event.on('custom', (data) => {
  console.log(data);
});
event.on('error', (err) => {
  
})
event.emit('custom', 'Hello World');

