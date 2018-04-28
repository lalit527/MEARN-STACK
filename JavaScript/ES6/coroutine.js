function async(proc, ...params) {
    let iterator = proc(...params);
    return new Promise((resolve, reject) => {
        let loop = (value) => {
            let result;
            try {
                result = iterator.next(value);
            } catch(err) {
                reject(err);
            }
            if (result.done) {
                resolve(result.value);
            } else if( typeof result.value === 'object'
                    && typeof result.value.then === 'function') {
                result.value.then((value) => {
                    loop(value)
                }, (err) => {
                    reject(err);
                });
            } else {
                loop(result.value);
            }
        }
        loop();
    });
}

function makeAsync(text, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, delay);
    });
}

async(function* (greeting){
    let foo = yield makeAsync("foo", 1000);
    let bar = yield makeAsync("foo", 2000);
    let baz = yield makeAsync("foo", 3000);
}, "Hello")
    .then((msg) => {
        console.log(msg);
    }, (err) => {
        console.log(err);
    });
    