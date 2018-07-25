const event2 = require('./events-2');

const event = event2.bar();

event.on('custom event', () => {
  console.log('Raised a custom event-1');
})
event2.foo();

// event.emit('custom event');