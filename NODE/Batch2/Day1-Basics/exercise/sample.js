let user = {
  1: {
    name: 'Jon'
  },
  2: {
    name: Danny
  }
}

let items = {
  1: {
    name: 'Item1',
    price: 10
  },
  2: {
    name: 'Item2',
    price: 100
  }
}

let itemPurchased = {
  id1: {
    user: {
      id: 1
    },
    items: {
      id: 2
    }
  },
  id2: {
    user: {
      id: 2
    },
    items: {
      id: 1
    }
  }
}

console.log(foo());

function foo() {
  getUser('name', (error, userId) => {
    if (error) {
      return error;
    }
    getItems(userId, (error, itemId) => {
      if (error) {
        return error;
      }
      getItemPrice(itemId, (error, price) => {
        if (error) {
          return error;
        }

      })
    })
  });
}

foo()

function getUser(name, cb) {
  setTimeout(() => {
    if(name==='123') {
      return cb('error');
    }
    let data = 1;
    return cb('', data);
  }, 1000);
}