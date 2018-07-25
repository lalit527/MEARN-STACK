const fs = require('fs');
const ws = fs.createWriteStream('test.txt');
const read = fs.createReadStream('sample.txt', 'utf-8');

// read.on('data', (data) => {
//   console.log(data);
// })
// read.on('end', (data) => {
//   console.log('end', data);
// })



// read.on('data', (data) => {
//   ws.write(data);
//   ws.end('This is the end\n');
// })

read.pipe(ws);

read.on('end', ()=> {
  console.log('read complete');
});
ws.on('finish', ()=> {
  console.log('write complete');
});


