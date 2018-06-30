(function foo(a, b, c) {
  var x = 2;
  console.log(x);
  console.log(a, b, c);
})(2, 4, 5);

var x = 2;

(function foo(x) {
  x = 5;
  console.log(x);
})(x);
console.log(x);

var obj = {
  a: 2
};

(function foo(obj) {
  obj.a = 5;
  console.log(obj);
})(obj);
console.log(obj);

var obj = {
  a: 2
};

(function foo(obj) {
  obj.b = 5;
  console.log(obj);
})(obj);
console.log(obj);