/**
 * ES5
 */

function foo() {

}



var array = [1, 2, 3, 4, 5];
newArray = array.map(function(value){
    return value + 2;
});

/**
 * ES6
 */

var array = [1, 2, 3, 4, 5];
newArray = array.map((value) => {
    return value + 2;
});

// If there is only one parameter, you don't need to provide the parenthesis
newArray = array.map(value => {
    return value + 2;
});

// If there is only one statement in the function and you want to return the value, you don't need to provide the return
newArray = array.map(value => value + 2);

array.filter((value, index) => {
    console.log(index, value);
});

array.myOwn(() => 2);

//

var numbers = [1, 2, 3, 4, 5];
var even = [];
numbers.forEach(function(value) {
    if(value %2 === 0) {
        even.push(value);
    }
});

// ES6
numbers.forEach(value => {
    if(value %2 === 0) {
        even.push(value);
    }
});

// also 


var obj = {
    numbers: [1, 2, 3, 4, 5],
    even: [],
    foo: function () {
        this.numbers.forEach(function(value) {
            this.numbers; 
            if(value %2 === 0) {
                this.even.push(value); // here this will refer to window object
            }
        });
    }
}
// error for this.even
obj.foo();

var obj = {
    numbers: [1, 2, 3, 4, 5],
    even: [],
    foo: function () {
        var self = this;
        this.numbers.forEach(function(value) {
            if(value %2 === 0) {
                self.even.push(value);
            }
        });
    }
}

/**
 * ES6
 */

var obj = {
    numbers: [1, 2, 3, 4, 5],
    even: [],
    foo: function () {
        this.numbers.forEach(value => {
            if(value %2 === 0) {
                this.even.push(value);
            }
        });
    }
}
