console.log('Loaded file file1');
let a = 2;
let b = 5;
console.log(++b);
module.exports = ++a;   
let main = () => {
  console.log('Running from file1');
}
if (require.main === module) {
  main();
}
console.log(module);