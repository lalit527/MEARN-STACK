console.log(1);

(function foo() {
    console.log(2);
})();

setTimeout(function() {
    console.log(3);
}, 2000);

setTimeout(function() {
    console.log(4);
    setTimeout(function() {
        console.log(7);
        setTimeout(function() {
            console.log(9);
        }, 0);
    }, 500);
}, 1000);

console.log(5);