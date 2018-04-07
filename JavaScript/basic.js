//Strictly Typed Languages
// int x = 5;
// string str = "Hello";
// int x = 5;
// String x = "Hello";

//Loosely typed language, dynamically typed Language
//We can give number, string, array or obect
var x = 5;       //Number
var x = "Hello"; //String
var x = {1,2,3}; //Object
var x = [1,2,3]; //Object
var x = true;    //Boolean

var x;           //undefined
var x = null;    //Object

//Declaring Functions
function foo() {

}

function foo(param1, param2) {

}

//Operators
// +
// -
// *
// /
// %
// ++
// --

var a = 5;
console.log(a); //5
var b = a++;
console.log(b); //6 --> 5
console.log(a); //5 --> 6
var c = ++a;
console.log(c); //6 --> 7
console.log(a); //5 --> 7

//b=++a  --> b=a; a=a+1
//b=a++  --> a=a+1; b=a;

//Arrays
var arr = [1, 2, 3]
var arr = new Array(1, 2, 3);

arr.length;
arr[0], arr[1], arr[2]
var arr = [3,2,1]
arr.sort(); //this will change the original array
arr.push(4) //[1,2,3,4]
arr.pop()   //4 will give the last element of the Array
arr.shift() //removes first
arr.unshift(1) // inserts at the first position
arr.join(',') // a string with all ele of array seperated by the specified separator
arr.slice() // copy of the array
arr.splice(1,2) // removes ele -- inedex and num of elem
arr.indexOf(1)
arr.lastIndexOf(1)

//string
var str = "Hello";
str.length;
str.split('');
str.substr(1,3) //substr strating from index to num of elements
str.substring(1,3) // substr strating from index to before element num of elements

//Object
var obj = {key: 'value'}
obj.key //value
obj['key'] //value
var x = 'key';
obj[x] //value

//number
var x = 3.14211111;

x.toFixed(0); //values after decimal point --> 3
x.toFixed(2); // 3.14
x.toPrecision() // returns origin values
x.toPrecision(2) //two number.. eg 3.1

Number()   //"124xys" --error | "123" --123
parseInt() //"124xys" --124

//Dates
var date = new Date()
date.getMonth()
date.getDate()
date.getFullYear()
date.getHours()

//conditional statements
if(value) {

}
//value will be evaluated to boolean

if(value1 && value2) {

}
//will be true if both the values evaluate to true
//if value1 is false it will not evalute value2

if(value1 || value2) {

}
//will be true if any of the value is true
//if value1 is true it will not evaluate value2

//Loops
var arr = ['a', 'b', 'c'];
for(var i=0; i<arr.length; i++) {
  console.log(i);//index
}

for(var i in a){
  console.log(i); //index
}

for(var i of a){
  console.log(i); //elements of array
}

for(int i=0; i<arr.length; i++) {
  if(i==1) {
    break;
  }
  console.log(i);
}

for(int i=0; i<arr.length; i++) {
  if(i==1) {
    continue;
  }
  console.log(i);
}
