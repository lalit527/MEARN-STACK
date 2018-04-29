// let arr = ['h', 'e', 'l', 'l', 'o'];
// console.log(arr);
// let n = arr.length-1;
// for(let i = 0; i < n/2; i++) {
//     [arr[n-i], arr[i]] = [arr[i], arr[n-i]]
// }
// console.log(arr);

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  (function(i){
      setTimeout(function() {
            console.log('Index: ' + i + ', element: ' + arr[i]);
        }, 3000);
    })(i);
}