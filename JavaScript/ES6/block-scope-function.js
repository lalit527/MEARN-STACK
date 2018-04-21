/**
 * ES5
 */

var foo = function() { 
    return 1; 
}

console.log(foo()); // 1

var foo = function() { 
    return 2; 
}

console.log(foo()); // 2

// Using IFEE to correct the name space

(function() {
    var foo = function() { 
        return 1; 
    }
    console.log(foo()); // 1
    (function() {
        var foo = function() { 
            return 2; 
        }
        console.log(foo()); // 2
    });
    
    console.log(foo()); // 1
});

/**
 * ES6
 */

// function
{
    function foo() {
        return 1;
    }

    console.log(foo()); // 1

    {
        function foo() {
            return 2;
        }
        
        console.log(foo()); // 2
    }

    console.log(foo()); // 1
}

// var
{
    var a = 1;

    console.log(a); // 1

    {
        var a = 2;        
        console.log(a); // 1
    }

    console.log(a); // 2
}

// use let

{
    let a = 1;

    console.log(a); // 1

    {
        let a = 2;        
        console.log(a); // 2
    }

    console.log(a); // 1
}