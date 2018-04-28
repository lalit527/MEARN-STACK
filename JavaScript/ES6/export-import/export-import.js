// namespacing in JS
libExport = {}

libExport.sum =  function(x, y) {
    return x + y;
}

libExport2  = {}

libExport2.sum =  function(x, y) {
    return x + y;
}

// ES5
/**
 * export
 */
libExport = {}

libExport.sum =  function(x, y) {
    return x + y;
}

libExport.PI = 3.1415;

// import
var math = libExport;
console.log("value" + math.sum(math.PI, 5));

var sum = libExport.sum;
var PI = libExport.PI;
console.log(sum(2, 5));

// ES6 Destructuring
var { sum, PI } = libExport;
