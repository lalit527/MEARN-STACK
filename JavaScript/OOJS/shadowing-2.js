function Foo(me) {
  this.me = me;
}
Foo.prototype.identify = function() {
  return "I am " + this.me;
}

Foo.prototype.speak = function() {
  console.log("Hello, "+ this.identify() + " .");
}

var a1 = new Foo("a1");
a1.speak();
a1.identify = function() {
  return "Hello World I am " + this.me;
}
a1.speak();
