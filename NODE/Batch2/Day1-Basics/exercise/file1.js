let a = 1;

function foo() {
  a = 2;
  console.log(a);
}

if (require.main === module) {
  foo();
}


module.exports = function() {
  return {
    key: a
  }
}