console.log(1);

// With function

console.log(1);

function foo() {
    console.log(2);
}


// Asynchronous calls

console.log(1);

function foo() {
    console.log(2);
}

setTimeout(function() {
    console.log(3);
}, 1000);

console.log(4);

// output -- 1 2 4 3


console.log(1);

function foo() {
    console.log(2);
}

setTimeout(function() {
    console.log(3);
}, 1000);

setTimeout(function() {
    console.log(4);
}, 0);

console.log(5);

// output:- 1 2 5 4 3