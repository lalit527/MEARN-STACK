let obj = {
  p123: {a:'Key1'},
  p234: {a:'Key2'},
  p456: {a:'Key1'}
}

let arr = [];
for (let key in obj) {
  console.log(key);
  arr.push(obj[key]);
}

console.log(arr);