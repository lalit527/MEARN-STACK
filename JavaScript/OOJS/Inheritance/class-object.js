class Foo {
  constructor(who) {
    this.me = who;
  }
  identify() {
    return "I am " + this.me;
  }
}

class Bar extends Foo {
  speak() {
    return "Hello I am " + this.identify();
  }
}

var b1 = new Bar("b1");
b1.speak();
