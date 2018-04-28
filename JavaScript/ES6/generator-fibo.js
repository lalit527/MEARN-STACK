let fibonacci = function* (number) {
    let pre = 0, cur = 1;
    while(number-- > 0) {
        [ pre, cur ] = [ cur, pre + cur ];
        yield cur
    }
}

// for(let n of fibonacci(10)) {
//     console.log(n);   
// }

let number = [ ...fibonacci(10) ]

console.log(number);
