const fs = require('fs');
const ws = fs.createWriteStream('test.txt');
const read = fs.createReadStream('sample.txt');
// read.on('data', (data) => {
//   ws.write(data);
//   ws.end('This is the end\n');
// })

read.pipe(ws);

read.on('end', (data)=> {
  console.log('read complete');
});
ws.on('finish', (data)=> {
  console.log('write complete');
});


