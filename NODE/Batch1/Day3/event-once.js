const EventEmitter = require('events');

class MyEvents extends EventEmitter {}

const event = new MyEvents();
let i = 0;
event.setMaxListeners(1);


event.on('custom', (data, j) => {
  console.log('1',data, ++i, ++j);
});

// event.once('custom', (data, j) => {
//   console.log('once', data, ++i, ++j);
// });
event.on('custom', (data, j) => {
  console.log('2',data, ++i, ++j);
  event.removeListener('custom', (data) => {

  })
});
event.on('custom', (data, j) => {
  console.log('3',data, ++i, ++j);
});

event.emit('custom', 'Hello World');

for(let j=0; j<10; j++) {
  // event.emit('custom', 'Hello World', j);
}

// for(let j=0; j<10; j++) {
//   setTimeout(()=>{
//     event.emit('custom', 'Hello World', j);
//   }, 0);
// }
event.removeListener('custom', (data) => {
  console.log(data);
});
// event.removeAllListeners('custom');

event.emit('custom', 'Hello Node', 99);

setTimeout(()=>{
  event.emit('custom', 'Hello python', 100);
}, 0);

// event.setMaxListeners(1);