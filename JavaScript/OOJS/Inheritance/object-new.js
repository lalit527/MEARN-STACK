function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
}

function Bar(who) {
  Foo.call(this, who);
}

Bar.prototype = new Foo("who");

Bar.prototype.speak = function() {
  return "Hello am " + this.identify();
}

var b1 = new Bar("b1");
console.log(b1.speak());