function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
}

function Bar(who) {
  Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
  return "Hello am " + this.identify();
}

var b1 = new Bar("b1");
b1.speak();

var b2 = Object.create(Bar.prototype);
Bar.call(b2, "b2");
b2.speak();
