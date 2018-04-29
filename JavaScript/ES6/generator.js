/*
function foo() {
    console.log(1);   
}

function foo() {
    return 1;
    // some line below return
}
*/
function* foo() {
    yield 1
    yield 2
    yield 3
}

var itr = foo();

// for(let i of foo()) {
//     console.log(i);  
// }

itr.next();
itr.next();
itr.next();