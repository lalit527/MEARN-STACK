console.log(1);

function add(a, b, cb){
  let result = a + b;
  cb(result);
}

add(2, 7, function(result) {
  console.log(result);
});

function add(a, b, cb){ 
  setTimeout(() => {
    let result = a + b;
    cb(result);
  }, 0);
}

add(2, 5, function(result) {
  console.log(result);
});


add(11, 7, function(result) {
  console.log(result);
});

console.log(2);