// Object Propert shorthand
/**
 * ES5
 */

 var a = 2, b = 5;

 var obj = {
     a: a,
     b: b
 }

 /**
 * ES6
 */

var a = 2, b = 5;

var obj = {
    a,
    b
}

/**
 * Computed Properties
 */

/**
 * ES5
 */
function quxx() {
    return "bam";
}
var obj = {
    foo: "bar"
};
obj["baz" + quxx()] = 42;

/**
 * ES6
 */
var obj = {
    foo: "bar",
    ["baz" + quxx()]: 42
};

// Function shorthand
/**
 * ES5
 */
var obj = {
    foo: function() {
        return 1;
    },
    bar: function(param) {
        return param;
    }
}

/**
 * ES6
 */
var obj = {
    foo() {
        return 1;
    },
    bar(param) {
        return param;
    }
}