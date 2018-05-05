var obj = {
    bar: "bar",
    foo: function() {
        console.log(this);
        var baz = function() {
            console.log(this);
        }
        baz();
    }
}

obj.foo()