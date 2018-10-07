// Handling Async code in Javascript

// 1. Callback FUnction
function bar(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 1000)
}


bar(2, 5, function (data) {
  console.log(data)
});

console.log(1);

// 2. Promises

function bar(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

bar(2, 5).then((data) => {
  console.log(data);
},
(error) => {
  console.log(error);
});

bar(2, 5).then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(data);
});

// 3. Generators
function bar(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

function *foo(a, b) {
  let data = yield bar(a, b);
  console.log(data);
}

let itr1 = foo();
itr1.next()

// 4. Async Await
function bar(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

async function foo() {
  let data = await bar(2, 5);
  console.log(data);
}
