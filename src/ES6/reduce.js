const arr1 = [1, 2, 3, 4, 5]
const initialValue1 = 0
const sum1 = arr1.reduce(
    (acc, cur, idx, src) => {
        return acc + cur
    },
    initialValue1
)
console.log(sum1);

var initialValue2 = 0;
var sum2 = [{ x: 1 }, { x: 2 }, { x: 3 }].map(item => item.x).reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, initialValue2)
console.log(sum2);

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (acc, cur) => [...acc, ...cur],
    []
);
console.log(flattened);

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce(
    (acc, cur) => {
        if (cur in acc) {
            acc[cur]++;
        }
        else {
            acc[cur] = 1;
        }
        return acc;
    }, {});
console.log(countedNames);

const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'Jane', age: 22 }
];

function groupBy(objectArray, property) {
    return objectArray.reduce(
        (acc, obj) => {
            const key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
}

console.log(groupBy(people, 'name'));

var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

const allBooks = friends.reduce(
    (acc, cur) => {
        return [...acc, ...cur.books]
    },
    ['3y5g']
)
console.log(allBooks);

let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(
    (acc, cur) => {
        if (!acc.includes(cur)) {
            acc.push(cur)
        }
        return acc
    },
    []
)
console.log(myOrderedArray);
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce(
    (acc, cur) => {
        if (acc.length === 0 || acc[acc.length - 1] !== cur) {
            acc.push(cur)
        }
        return acc
    },
    []
)
console.log(result);

Array.prototype.myReduce = function (callback, initial) {
    const arr = this
    const len = arr.length
    if (!len && !initial) {
        throw new Error('Reduce of empty array with no initial value')
    }
    if (len === 1 && !initial) {
        return arr[0]
    } else if (len === 0 && initial) {
        return initial
    }
    let acc = initial || arr[0]
    let i = initial ? 0 : 1
    for (; i < len; i++) {
        acc = callback(acc, arr[i], i, arr)
    }
    return acc
}

const array = [1]
const val = 0
const sum = array.myReduce(
    (acc, cur, idx, src) => {
        return acc + cur
    },
    val
)
console.log(sum);


function runPromiseInSequence(arr, input) {
    return arr.myReduce(
        (promiseChain, currentFunction) => promiseChain.then(currentFunction),
        Promise.resolve(input)
    );
}

// promise function 1
function p1(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 5);
    });
}

// promise function 2
function p2(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 2);
    });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
    return a * 3;
}

// promise function 4
function p4(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 4);
    });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10)
    .then(console.log);   // 1200


Array.prototype._reduce = function (callback, ...args) {
    let start = 0, pre
    if (args.length) {
        pre = args[0]
    } else {
        pre = this[0]
        start = 1
    }
    for (let i = start; i < this.length; i++) {
        pre = callback(pre, args[i], i, this)
    }
    return pre
}

