var Foo = {
  init: function(who) {
    this.me = who;
  },
  identify: function() {
    return "I am " + this.me;
  }
}

var Bar = Object.create(Foo);

Bar.speak = function() {
  return "Hello am " + this.identify();
}

var b2 = Object.create(Bar);
b2.init("b2");
b2.speak();
