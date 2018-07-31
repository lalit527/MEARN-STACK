const { Duplex } = require('stream');
const kSource = Symbol('source');
const fs = require('fs');

class MyDuplex extends Duplex {
  constructor(source, options) {
    super(options);
    this[kSource] = source;
  }

  _write(chunk, encoding, callback) {
    if (Buffer.isBuffer(chunk))
      chunk = chunk.toString();
      console.log(chunk)
    this.push(chunk);
    console.log(chunk);
    callback();
  }

  _read(size) {
    this[kSource].push(size, (data, encoding) => {
      this.push(Buffer.from(data, encoding));
    });
  }
}
const option = {
  allowHalfOpen: true,
  readableObjectMode: true,
  writableObjectMode: true
}

const ws = fs.createWriteStream('test.txt');
const read = fs.createReadStream('sample.txt', 'utf-8');
const duplex = new MyDuplex([] , option);
duplex.on('data', (chunk) => {
  // duplex.write(chunk);
  console.log('chunk', chunk);
})

read.pipe(duplex);
// duplex.write(Buffer.from('hello world', 'ascii'));
duplex.pipe(ws);
// read.pipe(duplex).pipe(ws);
