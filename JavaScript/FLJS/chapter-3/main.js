function unary(fn) {
  return function onlyOneArg(arg) {
    return fn(arg);
  }
}

var unary = fn => arg => fn( arg );

["1","2","3"].map( parseInt );
// [1,NaN,NaN]

["1","2","3"].map( unary( parseInt ) );
// [1,2,3]

// One on One
function identity(v) {
  return v;
}

var identity = v => v;

// Use of Identity
var words = "   Now is the time for all...  ".split( /\s|\b/ );
console.log(words);
// ["","Now","is","the","time","for","all","...",""]

words.filter(identity);
// ["Now","is","the","time","for","all","..."]

function output(msg,formatFn = identity) {
  msg = formatFn( msg );
  console.log( msg );
}

function upper(txt) {
  return txt.toUpperCase();
}

output( "Hello World", upper );     // HELLO WORLD
output( "Hello World" );            // Hello World

// doesn't work:
p1.then( foo ).then( p2 ).then( bar );

// instead:
p1.then( foo ).then( function(){ return p2; } ).then( bar );
p1.then( foo ).then( () => p2 ).then( bar );

// FP Utility
function constant(v) {
  return function value(){
      return v;
  };
}

var constant = v => () => v;
p1.then( foo ).then( constant( p2 ) ).then( bar );


// Destructuring
function foo(x,y) {
  console.log( x + y );
}

function bar(fn) {
  fn( [ 3, 9 ] );
}

bar( foo );         // fails

function spreadArgs(fn) {
  return function spreadFn(argsArr) {
    return fn(...argsArr);
  }
}

var spreadArgs = fn => argsArr => fn(...argsArr);

function gatherArgs(fn) {
  return function gatherArgs(...argsArr) {
    return fn(argsArr);
  }
}

var gatherArgs = fn => (...argsArr) => fn(argsArr);

function combineFirstTwo([ v1, v2 ]) {
  return v1 + v2;
}

[1,2,3,4,5].reduce( gatherArgs( combineFirstTwo ) ); // 15


//  Some Now some later
function getPerson(data,cb) {
  ajax( "http://some.api/person", data, cb );
}

function getOrder(data,cb) {
  ajax( "http://some.api/order", data, cb );
}

function getCurrentUser(cb) {
  getPerson( { user: CURRENT_USER_ID }, cb );
}

function partial(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs){
      return fn( ...presetArgs, ...laterArgs );
  };
}

var partial =
    (fn,...presetArgs) =>
        (...laterArgs) =>
            fn( ...presetArgs, ...laterArgs );
