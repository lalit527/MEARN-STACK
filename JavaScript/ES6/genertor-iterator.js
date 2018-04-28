let fibonacci = {
    *[Symbol.iterator]() {
        let pre = 0, cur = 1;
        for(;;) {
            [ pre, cur ] = [ cur, pre + cur ];
            yield cur
        }
    }
}

for (let n of fibonacci) {
    if (n > 10) {
        break;
    }
    console.log(n);
}

/**
 * ES5
 */
var fibonacci = {
    next: (function() {
        var pre = 0, cur = 1;
        return function() {
            tmp = pre;
            pre = cur;
            cur += tmp;
            return cur;
        }
    })()
};

var n;
for(;;) {
    n = fibonacci.next();
    if (n > 10) {
        break;
    }
    console.log(n);
}