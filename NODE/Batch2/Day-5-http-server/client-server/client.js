var http = require('http');

const { URL } = require('url');

const option = new URL("http://localhost:8005");

var req = http.get(option, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  })

  res.on('end', () => {
    console.log(JSON.stringify(data));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

console.log('Data');