const EventEmitter = require('events');

class CustomEvents extends EventEmitter {}

const events = new CustomEvents();

// events.on('batch four', (a, b) => {
//   console.log('Batch Four Event, Add', a+b);
// })

// events.once('batch four', (a, b) => {
//   console.log('Batch Four Event, Multiply', a-b);
// })

// events.emit('batch four', 5, 4);

// events.emit('batch four', 3, 4);

// events.emit('batch four', 5, 8);

events.on('batch four', (a, b) => {
  console.log('Batch Four Event, Add', a+b);
})

events.on('batch four', (a, b) => {
  console.log('Batch Four Event, Multiply', a-b);
})



events.prependListener('batch four', (a, b) => {
  console.log('Batch Four Event, Sub', a-b);
})

events.prependListener('batch four', (a, b) => {
  console.log('Batch Four Event, Divide', a/b);
})


events.prependOnceListener('batch four', (a, b) => {
  console.log('Batch Four Event, Mod', a%b);
})

events.emit('batch four', 5, 4);

events.emit('batch four', 3, 4);

events.emit('batch four', 5, 8);



