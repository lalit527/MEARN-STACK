//
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if('success') {
            resolve('success');
        } else{
            reject('reject');
        }
        
    });
});

return promise;

//
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if('success') {
            resolve('success');
        } else{
            reject('reject');
        }
        
    });
});
