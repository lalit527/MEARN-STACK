var log = console.log;

var obj = {
    x: 1
}

function foo() {
    console.log(this);
}
foo.call(obj)
let baz = foo.bind(obj)
baz()
obj.x =2
baz()

a = 1;

if (a === 1 && a===2 && a===3) {
    console.log('Hello');
}

