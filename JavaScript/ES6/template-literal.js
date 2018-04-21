var str = "Hello World";
var str = 'Hello World';

var str = `Hello World`;

var x = 10;

var str = "Hello World" + x + " times";
var str = `Hello World ${x} times`;

var str = `Hello World ${x} times.
           joined now`;

function foo() {
    return 10;
}

var str = `Hello World ${foo()} times`;

var obj = {
    key: 'value'
}

var str = `Hello World ${obj.value} times`;

// access the raw string

function foo(string, ...values) {
    string[0] === "foo\n";
    string[1] === "bar";
    String.raw[0] === "foo\n";
    String.raw[1] === "bar";
    values[0] = 42;
}

foo `foo\n${ 72 }bar`

String.raw `foo\n${ 72 }bar` === "foo\\n72bar"