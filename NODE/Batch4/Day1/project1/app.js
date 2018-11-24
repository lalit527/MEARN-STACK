let sum = (a, b, cb) => {
  cb(a + b);
}

sum(2, 3, (result) => {
  console.log(result);
});