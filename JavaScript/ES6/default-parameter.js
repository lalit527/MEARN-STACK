/**
 * ES5
 */

function foo(x, y) {
    x = x || 7;
    if(y === undefined) {
        y = 8;
    }
    console.log(x, y);
}

foo();

/**
 * ES6
 */
function foo(x=7, y=9) {
    console.log(x, y);
}

foo();

function foo(x=[1,2,3], y={key:'value1'}) {
    console.log(x, y);
}

foo();

// 
var w = 1;

function foo(x = w + 1, y = x + 2) {
    console.log(x, y); // 2, 4
}

//
var w =1;

function foo(x = w + 1, y = y + 2) {
    console.log(x, y); // Error y is not defined
}

//
var w =1, z = 2;

function foo(x = w + 1, y = x + 2, z = z + 1) {
    console.log(x, y); 
}

// function
function fetch(url, callback = function() {}) {

}

// IFEE

function foo(x = (function(v){
    return v + 11;
})(39)) {
    console.log(x);
}

// outer function

function bar(val) {
    return val + 11;
}

function foo(x = bar(39)) {
    console.log(x); 
}

//
function bar(val) {
    return val + y;
}

function foo(x = y + 3, z = bar(x)) {
    console.log(x, z); 
}

var y = 5;
foo();
