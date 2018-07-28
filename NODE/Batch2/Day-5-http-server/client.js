var http = require('https');

const { URL } = require('url');

const option = new URL("https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json");

var req = http.get(option, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  })

  res.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

// req.once('response', (res) => {
//   const ip = req.socket.localAddress;
//   const port = req.socket.localPort;
//   console.log(`Your IP address is ${ip} and your source port is ${port}.`);
//   // consume response object
//   // console.log(res);
// });


// req.end();

console.log('Data');