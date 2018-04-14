function Foo(me) {
  this.me = me;
}
Foo.prototype.identify = function() {
  return "I am " + this.me;
}

var a1 = new Foo("a1");

a1.identify(); // "I am a1"

a1.identify = function() {
  return "I am " + this.me + "inside a1";
}

a1.identify = function() {
  console.log("Hello, "+ this.identify() + ".");
}

a1.indentify(); // infinite loop

a1.identify = function() {
  console.log("Hello, "+ this.__proto__.identify() + ".");
}
a1.indentify();

// with call
a1.identify = function() {
  console.log("Hello, "+ Foo.prototype.identify.call(this) + ".");
}
a1.indentify();
