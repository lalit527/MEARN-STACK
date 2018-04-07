var x = 1;

function foo() {
  var x = 1;
  var a = 2;
  z = 5;
}
foo()

//Hoisting
console.log(a);
function foo(){
  console.log(a);
}
foo();
var a = 2;
//Compilation
var a;
function foo();
console.log(a);
function foo(){
  console.log(a);
}
foo();
a = 2;



var a = 2;
function foo() {
  return x;
  var x = 7;
}
function bar() {
  return x;
  z = 70;
}
function baz() {
  return z;
}
console.log(foo());
console.log(bar());
console.log(baz());
console.log(a);
var x  = 7;

var a = 5;
function foo(param1) {
  return param1;
  var param1 = 2;
}
console.log(foo(a));

var a = 5;
function foo(a) {
  return a;
  var a = 2;
}
console.log(foo());
