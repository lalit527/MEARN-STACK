// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(exports);

var obj ={
  id: 1,
  foo: {}
}

var foo = obj.foo;

foo.a = 2;

console.log(foo);
console.log(obj.foo);

foo = 5;

console.log(foo);
console.log(obj.foo);
