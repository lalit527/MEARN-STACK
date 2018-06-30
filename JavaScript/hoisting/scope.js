/*lexical scope*/
//global scope
var x = 2;
//function scope
function foo() {
  var z = 1;
}
console.log(z);//error

 //global scope
 var x = 2;
 //function scope
 function foo(){
   var x = 1;
   console.log(x);//1
 }
  console.log(x);//2


// pass by value
var x =2;
function foo(x) {
  x= 5;
  console.log(x);
}
console.log(x);

// pass by ref
var arr = [1,2, 3];
function foo(arr) {
  arr.push(5);
  console.log(arr)
}
foo(arr)
console.log(arr);

//global scope
var x = 2;
//function scope
function foo(){
  //'use strict'
  var x = 1;
  z = 1;
  console.log(x);//1
}
foo();
 console.log(x);//2
 console.log(z); //
'use strict' //use a first line in the file

//
var x =2;
function foo() {

	x = 5;
	console.log(x);
}
foo()
console.log(x);

/**/
console.log(x);
var x = 2;
function foo() {
  console.log(x);
}

var x = 2;
var b =9;
var a = 12;
var z = 17;
function foo() {
  var x = 3;
  var a =4;
  function bar() {
    var x = 7;
    var y = 27;
    console.log(x); 
    console.log(a); 
  }
  bar();
  console.log(x); 
}
console.log(x); 
foo();
bar();
