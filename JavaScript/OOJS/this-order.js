function something() {
  this.hello = "hello";
  console.log(this.hello, this.who);
}

var who = "global";
var obj1 = {who: "obj1", something: something };
var obj2 = { who: "obj2" };
var obj3 = { who: "obj3" };

something(); // "hello" "global" // window.something()

console.log(hello); // "hello" --> this.hello sets the property in window object

obj1.something(); // "hello" "obj1"
console.log(obj1.hello); // "hello"

something.call(obj3); // "hello" "obj3"
console.log(obj3.hello); // "hello"

obj1.something.call(obj2); // "hello" "obj2"
console.log(obj2.hello); // "hello"

obj1.something.call(this); // "hello" "global"
obj1.something.call(window); // "hello" "global"

var foobar = something.bind(obj2);

foobar(); // // "hello" "obj2"

foobar.call(obj1); // "hello" "obj2"

var bazbam = new something(); // "hello" undefined
console.log(bazbam.hello);

bazbam = new obj1.something(); // "hello" undefined

bazbam = new foobar(); // "hello" undefined
