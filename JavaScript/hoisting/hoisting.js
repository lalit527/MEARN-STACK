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
}
function baz() {
  return z;
}
console.log(foo());
console.log(bar());
console.log(baz());
console.log(a);
