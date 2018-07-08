//this
/*
1) In the global scope, 'this' will refer to
    the window object.

2) Inside a object, 'this' will refer to the
    current object.

3) If i call a function with 'call', 'apply', 'bind'
    'this' will refer to the object with which
    the function is called.

4) If i create an object with 'new' keyword,
    this will refer to the newly created object
*/

console.log(this); // window object

var obj = {
    key: 'value1',
    foo: function() {
        console.log(this); // Will refer to obj
    }
}
obj.foo()

va