const EventEmitter = require('events');

class MyEvents extends EventEmitter {}

const event = new MyEvents();

event.on('custom', (data) => {
  setImmediate(()=> {
    console.log(1, data);
  });
});

event.on('custom', (data) => {
  setTimeout(()=> {
    console.log(2, data);
  }, 0);
});

event.on('custom', (data) => {
  setImmediate(()=> {
    console.log(3, data);
  });
});

event.on('custom', (data) => {
  console.log(5, data);
});

event.on('custom', (data) => {
  process.nextTick(()=> {
    console.log(6, data);
  });
});
event.on('custom', (data) => {
  process.nextTick(()=> {
    console.log(7, data);
  });
});
// event.on('error', (data) => {
//   console.log(4, data);
// });

event.emit('custom', 'Hello World');