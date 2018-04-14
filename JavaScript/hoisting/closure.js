//Closure
//A function that holds on to the value of
//it's parent function, even when it executes
//outside it's lexical scope
function foo() {
  var x = 1;
  function bar() {
    console.log(x);
  }
  baz(bar);
}

function baz(func){
  func();
}

foo();

//
function counter() {
  var x = 0;
  function foo() {
    return ++x;
  }
  return foo;
}
console.log(x); //Error

var count = counter();

//
function counter() {
  var x = 0;
  return function foo() {
    return ++x;
  }

}

var count = counter();

//
function counter() {
  var x = 0;
  return function() {
    return ++x;
  }

}

var count = counter();
