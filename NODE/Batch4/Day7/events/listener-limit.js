const EventEmitter = require('events');

class CustomEvents extends EventEmitter {}

const events = new CustomEvents();


console.log(events.getMaxListeners());

events.setMaxListeners(20);

let foo = (a, b) => {
  console.log(`Batch Four Event, ${a%b}`);
}; 

for (let i = 0; i < 11; i++) {
  events.on('batch four', foo);
}

console.log(events.listenerCount('batch four'));

events.removeAllListeners('batch four', foo);

events.emit('batch four', 5, 4);

// events.emit('batch four', 3, 4);

// events.emit('batch four', 5, 8);



