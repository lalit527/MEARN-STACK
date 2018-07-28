const request = require('request');
 
request('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
  console.log(JSON.stringify(res));
});