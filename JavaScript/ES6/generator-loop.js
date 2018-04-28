function* fooLoop(start, end, step) {
    while(start <= end) {
        yield start
        start += step;
    }
}

for (let i of fooLoop(5,100,5)) {
    console.log(i);
}

var it = fooLoop(5,100,5);
console.log(it.next());

// write an generator that will give me multiple of 5 till 100.

/**
 * ES5
 */
function fooLoop(start, end, step) {
    var list = [];
    while(start <= end) {
        list.push(start);
        start += step;
    }
    return list;
}

var it = fooLoop(5,100,5);
for() {
    
}