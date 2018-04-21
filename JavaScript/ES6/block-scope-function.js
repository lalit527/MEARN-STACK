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