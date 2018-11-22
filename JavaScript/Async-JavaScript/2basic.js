// Array.prototype.map = projectionFunction => {
//   let results;
//   console.log(this);
//   this.forEach(element => {
//     results.push(projectionFunction(element));
//   });
//   return results;
// }

Array.prototype.map = function(projectionFunction) {
  let results = [];
  this.forEach(element => {
    results.push(projectionFunction(element));
  });
  return results;
}

let result = [1, 2, 3, 4, 5].map((ele) => {
  return ele + 2;
});

console.log(result);