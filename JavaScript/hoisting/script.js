function foo(callback) {
  callback();
}

var bar = function() {
console.log("Hello");
}

foo(bar);

foo(function() {
console.log("World");
})

/// Variable scope
console.log("================================");
console.log("+++++++variable scope++++++++++++");
console.log("================================");
function foo(callback) {
  var a = 2
  callback();
}

var bar = function() {
  var a = 4;
  console.log(a);
}

foo(bar);

var x = 2;
