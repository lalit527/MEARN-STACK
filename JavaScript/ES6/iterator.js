var list = ['a', 'b', 'c'];

for(let i = 0; i < list.length; ++i) {
    console.log(list[i]);
}

for(let i in list) {
    console.log(list[i]);
}

for(let i of list) {
    console.log(i);
}

// Iterators
function makeIterator(array) {
    var nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

let iter = makeIterator(['a', 'b', 'c']);


let fibo = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre+ cur]
                return { done: false, value: curr }
            }
        }
    }
}

for(let n of fibo) {
    if(n > 100) {
        break;
    }
    console.log(n);
}

function foo() {
    // return
    // 1
    // 2
    // 3
}

foo();

// [*Generator]
function foo() {
    // 1

    // 2
    // 3
}

foo.next(); // { value:1, done:false }
foo.next(); // { value:2, done:false }
foo.next(); // { value:3, done:false }
foo.next(); // { done:true }