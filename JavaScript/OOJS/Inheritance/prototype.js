function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
}

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a1.identify();
a2.identify();

Foo.prototype.speak = function() {
  return "Hello, I am" + this.me;
}

a1.speak();
a2.speak();

a1.speak = function() {
  return "local speak " + this.me;
}


var a1 = [1,2,3]
var a1= new Array(1,2,3);
Array.prototype
