var foo = function() {
    var count = 1;
    function bar() {
        return ++count;
    }
    return bar;
}
let baz = foo();
console.log(baz());