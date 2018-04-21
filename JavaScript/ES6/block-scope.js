// ES5
var a = 10; // global scope

//
function foo() {
    var b = 2; // function scoped
}

console.log(b); //  Reference error

function foo() {
    for(var i=0; i< 10; i++) {
        console.log(i); 
    }
    console.log(i); // i = 10
}

function foo() {
    for(var i=0; i< 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000); 
    }
}

// correct scope for i
function foo() {
    for(var i=0; i< 10; i++) {
        (function(i) {
            setTimeout(function() {
                console.log(i);
            }, 1000); 
        })(i);       
    }
}


// Issue in an array
var array = [];
function foo() {
    for(var i=0; i< 10; i++) {
       array[i] = function() {
            return i;
       };
    }
}

foo();

// corrected array 
var array = [];
function foo() {
    for(var i=0; i< 10; i++) {
        (function(i){
            array[i] = function() {
                return i;
            };
        })(i);
    }
}

/**
 * ES6
 */

// let

function foo() {
    for(let i=0; i< 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000); 
    }
}

var array = [];
function foo() {
    for(let i=0; i< 10; i++) {
       array[i] = function() {
            return i;
       };
    }
}

// let variables will not be hoisted

// const

const a = 10;

a = 12; // will not work, Error a is already defined

// 

const array = [1, 2, 3, 4]

array[0] = 5

array // 5, 2, 3, 4
