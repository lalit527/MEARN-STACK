function async(generator, ...params) {
    let iterator = generator(...params);
    return new Promise((resolve, reject) => {
        let loop = (value) => {
            console.log('val', value);
            let result;
            try {
                result = iterator.next(value);
                console.log('res', result);
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
            console.log(text);
            resolve(text);
        }, delay);
    });
}

async(function* (greeting){
    let foo = yield makeAsync("foo", 1000);
    let bar = yield makeAsync("bar", 2000);
    let baz = yield makeAsync("baz", 3000);
    return `${greeting} ${foo} ${bar} ${baz}`
}, "Hello", "World")
    .then((msg) => {
        console.log(msg);
    }, (err) => {
        console.log(err);
    });
    