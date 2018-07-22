const events = require('events');

const event = new events;

event.on('cus', () => {
  console.log(2);
})
event.emit('cus');