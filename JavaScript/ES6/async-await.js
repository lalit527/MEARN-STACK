// function foo(who, msg, then) {
//     setTimeout(() => {
        
//     });
// }

async function foo() {
    return 1;
}

console.log(foo());

foo().then(() => {
    console.log('Inside Then');
});

async function foo() {
    return Promise.resolve(1);
}

foo().then((value) => {
    console.log('Inside Then', valu);
});

// let value = await promise;

