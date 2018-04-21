/**
 * ES6
 */
function foo(x, ...rest) {
    console.log(x);
    console.log(rest);
}


foo(12, 1, 2, 3, 4);

/**
 * ES5
 */

function foo(x) {
    var rest = Array.prototype.slice.call(arguments, 1);
    console.log(x);
    console.log(rest);
}


foo(12, 1, 2, 3, 4);
