Higher Order Functions

//Hoisting
bar();
function bar() {
  console.log("Hey");
}
var z = 10;
function foo() {

}
var x = 2;
var a  = 5;


//Function Expression
bar();
foo();
function bar() {
  console.log("Hey");
}
var foo = function() {
  console.log("Hi");
}

//Function Expression
var foo = function() {
  console.log("Hi");
}

//Annnonymous FE
var foo = function() {
  console.log("Hi");
}

//Named FE
var foo = function NAMED() {
  console.log("Hi");
  NAMED();//works
  //foo();//this will not work
}

//foo() //Hi
//NAMED() -- Error named is not a func

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
