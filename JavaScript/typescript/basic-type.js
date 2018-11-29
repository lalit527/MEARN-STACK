// number
var x = 5;
var decimal = 5.6;
var binary = 10;
var a = 5; // let a:number = 5;
// string
var data = "blue";
var data1 = 'red';
// Boolean
var isComplete = true;
// x='Hello'; Error
// Array
var array = [1, 2, 3];
var array1 = [1, 2, 3];
// Tuple
var tuple = ["hello", 1];
// let tuple1: [string, number] = [1, "hello"];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
// any
var random = 4;
random = 'Hello';
random = [1, 2, 3, 4];
var array2 = [1, 2, 'Hello', false];
// void
function foo() {
    console.log('Void function');
}
function baz() {
    console.log('Void function');
    return 1;
}
var unused = null; // null or undefined
