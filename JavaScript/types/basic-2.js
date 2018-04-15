var a;
typeof a; // "undefined"

var bar = typeof bar;
bar;     // "undefined"
typeof bar;     //"undefined" -- Typeof for Both undefined and undeclared variables are undefined

typeof typeof 1234 // "string"


var a = "a" / 2;

a;       // NaN
typeof a;    // number
typeof NaN   // number

isNan(a); //true


var n = 0 / -3;

n === -0;  //true

n === 0;   //true

0 === -0  //true
