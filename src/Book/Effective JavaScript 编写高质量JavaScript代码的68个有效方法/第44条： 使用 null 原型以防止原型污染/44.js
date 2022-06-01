// function C() { }
// C.prototype = null

// var o = new C();
// Object.getPrototypeOf(o) === null               // false
// Object.getPrototypeOf(o) === Object.prototype   // true

// console.log(Object.getPrototypeOf(o));
// console.log(Object.getPrototypeOf(o) === null);
// console.log(Object.getPrototypeOf(o) === Object.prototype);

// var x = Object.create(null);
// Object.getPrototypeOf(x) === null;          // true


// console.log(Object.getPrototypeOf(x));
// console.log(Object.getPrototypeOf(x) === null);

var x = { __proto__: null };
x instanceof Object               // false (non-standard)

console.log(x instanceof Object);

