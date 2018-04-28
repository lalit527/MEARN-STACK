class Foo {
    
    constructor(who) {
      this.me = who;
    }
    identify() {
      return "I am " + this.me;
    }

    static getData() {
        console.log('Stactic Method');
    }
}

Foo.getData()
var foo = new Foo("foo");

/**
 * ES5
 */

var Foo = function(who) {
    this.me = who;
}
Foo.prototype.identify() = function(){
    return "I am " + this.me;
}

Foo.getData = function() {
    
}

var foo = new Foo("foo");

foo.__proto__ === Foo.prototype