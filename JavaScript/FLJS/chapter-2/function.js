function forEach(list, fn) {
  for (let v of list) {
    fn(v);
  }
}

forEach([1, 2, 3, 4, 5], function each(val) {
  console.log(val);
})