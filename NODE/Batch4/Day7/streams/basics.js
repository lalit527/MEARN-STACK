const fs = require('fs');

const rs = fs.createReadStream('test.txt');



const ws = fs.createWriteStream('sample.txt');

const ws2 = fs.createWriteStream('samplew.txt', {flags: 'a'});

// rs.on('open', (data) => {
//   console.log('data', data);
// });

// rs.on('data', (data) => {
//   ws.write('Hello World');
// })

// rs.on('end', () => {
//   console.log('ended');
// })

// ws.on('open', () => {
//   console.log('write open');
// })

rs.pipe(ws);

ws2.on('open', () => {
  ws2.write('Hey')
})

console.log("Hello World");

fs.stat('sample4.txt', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});

process.on('uncaughtException', () => {
  console.log('Error was raised');
})

process.on('exit', () => {
  console.log('Before Exit');
})