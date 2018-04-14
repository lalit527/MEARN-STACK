function Foo(me) {
  this.me = me;
}
Foo.prototype.printName = function() {
  return "I am " + this.me;
}

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a1.printName();

Foo.prototype.printName = function() {
  return "Changed I am " + this.me;
}

a1.printName();

a1.constructor;


a1.constructor === Foo;
a2.constructor === Foo;
a1.constructor === a2.constructor;

a1.__proto__ === Foo.prototype;
a2.__proto__ === Foo.prototype;
a1.__proto__ === a2.__proto__;

a1.__proto__ === a1.constructor.prototype;
