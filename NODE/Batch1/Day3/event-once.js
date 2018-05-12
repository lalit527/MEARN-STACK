const EventEmitter = require('events');

class MyEvents extends EventEmitter {}

const event = new MyEvents();
let i = 0;
event.on('custom', (data, j) => {
  console.log(data, ++i, ++j);
});

event.once('custom', (data, j) => {
  console.log('once', data, ++i, ++j);
});
for(let j=0; j<10; j++) {
  event.emit('custom', 'Hello World', j);
}

// for(let j=0; j<10; j++) {
//   setTimeout(()=>{
//     event.emit('custom', 'Hello World', j);
//   }, 0);
// }

event.removeAllListeners('custom');

event.emit('custom', 'Hello Node', 99);