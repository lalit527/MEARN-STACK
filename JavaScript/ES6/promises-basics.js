//
function foo() {
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
    
}

let x = foo().then((success) => {

}).catch((error) => {

});

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
