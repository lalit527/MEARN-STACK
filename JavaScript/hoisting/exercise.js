function foo(a) {
	console.log(a);
}

foo();
///
function foo(a,b,c,d) {
	console.log(a,b,c,d);
}

foo(5,2);
var x =2;

//jvadgsi
//x = 3;
var x = 3;


//
function foo() {
	console.log("No Param");
}

function foo(a) {
	console.log("One Param");
	console.log(a,b,c,d);
}

function foo(a,b) {
	console.log("Two Param");
	console.log(a,b,c,d);
}

function foo(a,b, c) {
	console.log("Three Param");
	console.log(a,b,c,d);
}

function foo(a,b,c,d) {
	console.log("Four Param");
	console.log(a,b,c,d);
}

foo(5,2);
foo(5,2,3);
foo(5,2,3,4);
foo();

//
function foo(a,b,c,d) {
	console.log(a,b,c,d);
}

function foo(a,b) {
	console.log(a,b);
}

foo(5,6,7,8);

var a = 1;
function foo(a){
  c = 4;
  return a;
  var a = 2;
}
foo(5)
foo()

// 
var a = 1;
function foo(){
  c = 4;
  return a;
  var a = 2;
}
foo(5)
foo()


// 

function bar() {
  return c;
  d = 7;
}

foo(a);

function foo(param1){
	console.log(arguments);
	console.log(Array.prototype.slice.call(arguments))
	console.log([].slice.call(arguments))
	console.log(param1);
}

foo(1,2,3,4, 5);
