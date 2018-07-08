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


x;

var x = function x() {
  console.log(1);
}

// Async Issue
for (var i = 0; i < 3; i++) {
  setTimeout(function() { 
    console.log(i); 
  }, 1000 + i);
}


for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(function() { 
      console.log(i); 
    }, 1000 + i);
  })(i);
  
}


// Three level Function Closure
function counter(x) {
  function foo(y) {
    function bar(z) {
      return x + y + z;
    }
    return bar;
  }
  return foo;
}

// closure scope
function foo() {
  var bar = 0;
  setTimeout(function() {
    var baz = 1;
    console.log(bar++);
    setTimeout(function() {
      console.log(bar, baz);
    }, 200)
  }, 100)
}

foo()
