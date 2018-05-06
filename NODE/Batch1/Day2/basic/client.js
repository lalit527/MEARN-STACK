var http = require('http');

const { URL } = require('url');

const option = new URL("http://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json");

var client = http.request(option, (res) => {
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('Done');
  });
});

