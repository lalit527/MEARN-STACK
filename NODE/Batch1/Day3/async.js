setTimeout(() => {
  console.log(1);
}, 5000);

setTimeout(() => {
  console.log(2);
}, 4000);

setTimeout(() => {
  console.log(3);
}, 3000);

setTimeout(() => {
  console.log(4);
}, 2000);

setTimeout(() => {
  console.log(5);
}, 1000);
// Blocking code
// process.nextTick(() => {
//   console.log(10);
//   setTimeout(() => {
//     for(let i=0; i<10000; i++){
//       console.log(i);
//     }
//   }, 2000)
// })

// process.nextTick(() => {
//   console.log(10);
//   setTimeout(() => {
//     for(let i=0; i<10000; i++){
//       setTimeout(()=> {
//         console.log(i);
//       }, 2000);
//     }
//   }, 2000)
// })

setTimeout(() => {
  console.log(11);
  setTimeout(() => {
    console.log(27);
  }, 2000)
}, 0)