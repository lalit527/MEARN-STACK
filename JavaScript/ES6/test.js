let sum = (a, b, cb) => {
  cb(a + b);
}

sum(2, 3, (result) => {
  console.log(result);
});


let sum = function(a, b, cb) {
  cb(a + b);
}

sum(a, b, function(result) {
  console.log(result);
});