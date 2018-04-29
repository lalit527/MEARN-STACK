// function* foo() {
//     var x = yield 1; // "b"
//     var y = yield 2;
//     var z = yield 3;
//     console.log(x, y, z);
    
// }

function* foo2() {
    var x = yield 1; 
    var y = yield 2; 
    return 5;
    var z = yield 3;
    console.log(x, y, z);   
}

var it = foo2();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

console.log(it.next("a"));
console.log(it.next("b"));
console.log(it.next("c"));
console.log(it.next("d"));
console.log(it.next("e"));
