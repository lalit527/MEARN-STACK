const http = require('http');
const server = http.createServer();
const unhandledRejections = new Map();

server.listen('7000', () => {
  console.log('Listening on port 7000');
});

process.on('exit', (code) => {
  console.log(unhandledRejections);
  console.log(`About to exit with code: ${code}`);
});

process.on('unhandledRejection', (reason, p) => {
  unhandledRejections.set(p, reason);
});

process.on('rejectionHandled', (p) => {
  unhandledRejections.delete(p);
});

Promise.reject('Uncaught');

process.on('uncaughtException', (err) => {
  console.log(1, `Caught exception: ${err}\n`);
  process.exit(1);
});

setTimeout(() => {
  // throw new Error('Custom');
}, 3000);

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// process.abort(); 