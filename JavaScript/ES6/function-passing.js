function add(a, b) {
  return a + b;
}

function foo(a, b, cb) {
  add(a, b);
}

function foo(a, b, cb) {
  result = a + b;
  cb(result);
}



var bar = function(result) {
  console.log(result);
}

function foo(a, b, cb) {
  setTimeout(() => {
    result = a + b;
    cb(result); 
  }, 1000)
}



var bar = function(result) {
  console.log(result);
}

foo(1, 2, bar);