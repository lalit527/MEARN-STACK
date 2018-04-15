var foo = "123";

var baz = parseInt(foo, 10);

baz;   123

baz = Number(foo);  //123


baz = +foo;    //123


baz = 456;

foo = baz.toString();

foo = String(baz);

// Boolean
var foo = "123";

var baz = Boolean(foo);
baz; //true
