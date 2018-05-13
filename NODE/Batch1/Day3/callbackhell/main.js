var foo = function() {
  let bar = function() {

  }
  setTimeout(() => {
    // DB -- customerId
    setTimeout(() => {
      // DB - Cart Id
      setTimeout(() => {
        // Item
        setTimeout(() => {
          //Price
        }, 1000)
      }, 1000)
    }, 1000)

  }, 100);
  

}

let foo = () => {
  console.log(1)
}

setTimeout(foo);

[p1, p2, p3, p4].all