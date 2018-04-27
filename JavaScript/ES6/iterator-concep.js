let arr = [1, 2, 3]

let it = arr[Symbol.iterator]()

for(let i of it) {
    console.log(i);
}

console.log(it.next());