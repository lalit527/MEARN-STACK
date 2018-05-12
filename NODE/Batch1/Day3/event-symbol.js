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

