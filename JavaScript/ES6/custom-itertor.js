let idMaker = {
    [Symbol.iterator]() {
        let nextId = 8000;
        return {
            next() {
                if(nextId === 8005) {
                    return {
                        value: undefined,
                        done: true
                    }
                }
                return {
                    value: nextId++,
                    done: false
                }
            }
        }
    }
}

let id = idMaker[Symbol.iterator]();


for(let i of idMaker) {
    console.log(i);
}

// console.log(id.next());
// console.log(id.next());
// console.log(id.next());
// console.log(id.next());
// console.log(id.next());
// console.log(id.next());
// console.log(id.next());
