var obj = {
  a: { key: 'value' },
  foo() {
    console.log(this.a.key); // value
  }
}

obj.foo();

//with key
var obj = {
  a: { key: 'value' },
  foo: function() {
    console.log(this.a.key); // value
  }
}

obj.foo();

//call has to be with this
var obj = {
  a: { key: 'value' },
  foo() {
    console.log(this.a.key); // value
  },
  bar() {
    console.log(a.key); // undefined
  }
}

obj.foo();

//this will create a closure around a
var foo = (function() {
  var a = {key: 'value1'};
  return {
    bar: function() {
      console.log(a.bar);
    }
  }
})();

foo.bar();

// with extra variable
var foo = (function() {
  var a = {key: 'value1'};
  var b = {
    bar: function() {
      console.log(a.bar);
    }
  }
  return b;
})();

foo.bar();
