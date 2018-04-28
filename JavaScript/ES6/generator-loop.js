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

