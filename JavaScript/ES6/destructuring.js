/** 
 * ES6
*/
var list = [1, 2, 3, 4, 5];
var [ a,  b ] = list;
[ a, b ] = [ b, a ]; // swapping two numbers  

var [ c, , d ] = list;

/**
 * ES5
 */
var list = [1, 2, 3, 4, 5];
var a = list[0], b = list[1];
var tmp = a;
a = b;
b = tmp;

/** 
 * ES6
*/
var obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
}


var { key1:key1, key2:key2 } = obj;
var { key1, key2 } = obj;
var { key1:a, key2:b } = obj;

/**
 * ES5
 */
var obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
}

var key1 = obj.key1;
var key2 = obj.key2;

var a = obj.key1;
var b = obj.key2;

/**
 * ES6
 */
var obj = {
    key1: 'value1',
    key2: {
        innerKey: 'innerValue'
    },
    key3: 'value3'
}

var { key1, key2: {innerKey}, key3 } = obj;

var { key1: a, key2: {innerKey: z}, key3: b } = obj;

/**
 * 
 */
var obj = { a: 1 }
var list = [ 1 ]
var { a, b=2 } = obj;
var [ x, y=2 ] = list;

/**
 * ES6
 */

 function foo([ name, value ]) {
    console.log(name, value);
 }

 function bar({ name: n, value: v }) {
    console.log(n, v);
 }

 function baz({ name, value }) {
    console.log(name, value);
 }


 foo(["jon", 25]);
 bar({ name: "jon", value: "25" });
 baz({ name: "jon", value: "25" });

 /**
 * ES5
 */

function foo(args) {
    var name = args[0];
    var value = args[1];
    console.log(name, value);
 }

 function bar(args) {
    var n = args.name;
    var v = args.value;
    console.log(n, v);
 }

 function baz({ name, value }) {
    var name = args.name;
    var value = args.value;
    console.log(name, value);
 }

 /**
  * ES6
  */

 var list = [ 2, 7 ]
 var [ a=1, b=2, c=3, d ] = list;

 a === 2
 b === 7
 c === 3
 d === undefined

 /**
  * ES5
  */

 var list = [ 2, 7 ];

 var a = typeof list[0] !== "undefined" ? list[0] : 1; 
 var b = typeof list[1] !== "undefined" ? list[1] : 2; 
 var c = typeof list[2] !== "undefined" ? list[2] : 3; 
 var d = typeof list[3] !== "undefined" ? list[3] : undefined; 