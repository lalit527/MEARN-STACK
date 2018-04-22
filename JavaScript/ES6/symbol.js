Symbol("foo") !== Symbol("foo") // true

const foo = Symbol(); // typeof foo "symbol"

const bar = Symbol(); // typeof foo "symbol"

let obj = {}

obj[foo] = "foo";
obj[bar] = "bar";

JSON.stringify(obj); // {}

Object.keys(obj); // []
Object.getOwnPropertyNames(obj); // []
Object.getOwnPropertySymbols(obj); // [ foo, bar ]

//
var obj = {
    foo: Symbol(),
    bar() {
        console.log(this.foo);
    }
}

var obj1 = {};
var obj2 = {};

var obj3 = {};

obj3[obj1] = 2;
obj3[obj2] = 1;

obj3[obj1] = 5;

obj3[obj1]; // 5 
obj3[obj2]; // 5