



// var foo = function() {
//   var foo = "baz";

//   function baz(foo) {
//     // foo = bar;
//     console.log(foo);
//   }
//   baz();
// };

// foo();
// bar();

// var foo = function() {
//   var foo = "baz";

//   function baz(foo) {
//     // foo = bar;
//     console.log(foo);
//   }
//   baz();
// };
count = 1
var foo = function bar() {
  if (count === 100){
    return
  }
  ++count;
  console.log(foo);
  bar()
};

console.log(foo);
foo()