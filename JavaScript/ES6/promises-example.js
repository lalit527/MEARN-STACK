/**
 * ES6 - promises
 */
function sendMessage(who, msg, dealy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${who} says Hello ${msg}`);
        }, delay);
    });
}

sendMessage("John", "World", 1000)
    .then((success) => {
        console.log(successs);
    });

// with error
function sendMessage(who, msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`err`);
        }, delay);
    });
}

sendMessage("John", "World", 1000)
    .then((success) => {
        console.log(successs);
    })
    .catch((error) => {
        console.log('some error has happened', error);
    });


/**
 * Issues with normal asynchornous function
 */

function sendMessage(who, msg, delay) {
    setTimeout(() => {
        return `${who} says Hello ${msg}`;
    }, delay);
}

console.log(sendMessage("John", "World", 1000));

/**
 * Solving in ES5
 */
function sendMessage(who, msg, delay, callback) {
    setTimeout(() => {
        callback(`${who} says Hello ${msg}`);
    }, delay);
}

sendMessage("John", "World", 1000, function(sucess) {
    console.log(sucess);
});   

// with error
function sendMessage(who, msg, delay, callback) {
    setTimeout(() => {
        //callback('error');
        callback('', `${who} says Hello ${msg}`);
    }, delay);
}

sendMessage("John", "World", 1000, function(err, sucess) {
    if(err) {
        console.log(err);
    } else{
        console.log(sucess);
    }
    
});   



