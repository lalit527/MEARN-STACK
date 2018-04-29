async function foo() {
    let result = await baz();
    console.log("foo", result);
}

function baz() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 1000);
    });
}

function bar() {
    let result = baz();
    console.log("bar", result);
}


foo();
bar();