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

/**
 * Spread
 */

 var params = ["hello", true, 7];
 var others = [1, 2, ...params]; // [1, 2, "hello", true, 7] // 5

 var params = ["hello", true, 7];
 var others = [1, 2, params]; // [1, 2, ["hello", true, 7]] // 3

 function foo(x, y, ...rest) {  // foo(1, 2, ["hello", true, 7])
    return (x + y) * rest.length;
 }

 foo(1, 2, ...params); // foo(1, 2, "hello", true, 7);

 var str = "hello world";
 var chars = [...str];