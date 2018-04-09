\//Strictly Typed Languages
// int x = 5;
// string str = "Hello";
// int x = 5;
// int x = 6;
// String x = "Hello";

//Loosely typed language, dynamically typed Language
//We can give number, string, array or obect
var x = 5;       //Number  5.6788
var x = "Hello"; //String
var x = {1,2 ,3}; //Object
var x = [1,2,3]; //Object
var x = true;    //Boolean

var x;           //undefined
/*
  var x = 5;
  var x;
  ///////Backed
  //User Interaction
  x = undefined;
  x//undefined
*/
var x = null;    //Object

typeof x

//Declaring Functions
function foo(param1,) {

}

var num1 =5; var num2 = 10;
// num1+num2 = 15
foo(num1, num2)
//var param1 = 5;


function foo(param1, param2) {
  return param1+param2;
}

function foo(param1, param2, param3) {
  return p1+p2+p3;
}
var a = 1;
++a;
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
var arr = [1, "hello", function(){}];
0, 1, 2
arr[3] = undefined;
arr[3] -- undefined

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
var obj = {key: 'value', key2: 'value2'}
obj.key //value
obj['key'] //value
var x = 'key';
obj.x
obj[x] //value obj['key']
Object.keys(obj) //gives an array of [key, key2]

//number
var x = 3.14211111;

x.toFixed(0); //values after decimal point --> 3
x.toFixed(2); // 3.14
x.toPrecision() // returns origin values
x.toPrecision(1) //two number.. eg 3.1

Number()   //"124xys" --error | "123" --123
parseInt() //"124xys" --124 //"xyz123" --undefined
// int[] arr = {1,2,3}
// int arr[] = {}
//Dates
var date = new Date()
date.getMonth()
date.getDate()
date.getFullYear()
date.getHours()

//conditional statements
if(value1) {

}else if(value2){

}
else{

}
//value will be evaluated to boolean

if(value1 && value2) {

}
arr=[1,2,3]
index=3
if(index < arr.length && arr[index] == 2){

}
//will be true if both the values evaluate to true
//if value1 is false it will not evalute value2

if(value1 || value2) {

}
//will be true if any of the value is true
//if value1 is true it will not evaluate value2
var a = 2;
if(1=1 || ++a==2) {
  console.log(a);
}
//Loops
var arr = ['a', 'b', 'c'];
for(var i=0; i<arr.length; ++i) {
  console.log(i);//index
}
var a = 1;
while(a<4){
  ++a;
}

do(){

}while(){

}

var a = 1;
while(a<4){
  a++;//
}

for(var i in a){
  console.log(i); //index
}

for(var i of a){
  console.log(i); //elements of array
}

for(var i=0; i<arr.length; i++) {
  if(i==1) {
    break;
  }
  console.log(i);
}

for(var i=0; i<arr.length; i++) {
  if(i==1) {
    continue;
  }
  console.log(i);
}
