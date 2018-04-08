/*lexical scope*/
//global scope
var x = 2;
//function scope
function foo(){
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


//
var x =2;
function foo(x) {
  x= 5;
  console.log(x);
}
console.log(x);


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
    console.log(x); //7
    console.log(a); //4
  }
  bar();
  console.log(x); //3
}
console.log(x); //2
foo();
bar();
