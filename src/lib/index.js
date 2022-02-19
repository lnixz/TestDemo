import call from './call.js';
import apply from './apply.js';
import bind from './bind.js';

function add(a, b) {
    return a + b + this.c
}

let obj = {
    c: 521
}

globalThis.c = 1314

console.log(call(add, obj, 10, 20));
console.log(call(add, null, 10, 20));
console.log(apply(add, obj, [10, 20]));
console.log(apply(add, null, [10, 20]));
