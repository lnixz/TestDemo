
function fn(a, b) {
    console.log(JSON.stringify(a));
    console.log(JSON.stringify(b));
    const strA = JSON.stringify(a)
}




var obj = {
    a: 0,
    c: '',
    d: true,
    e: {
        f: 1,
        e: {
            e: 0,
            f: 2
        }
    }
}







console.log(fn({ a: 0 }, obj)) // true
console.log(fn({ a: 0, d: true }, obj)) // true
console.log(fn({ e: 0 }, obj)) // true
console.log(fn({ a: 0, c: '' }, obj)) // true
console.log(fn({ a: 0, e: 0 }, obj)) // false
console.log(fn({ e: { f: 1 }, obj })) // true
console.log(fn({ e: { f: 2 }, obj })) // true
console.log(fn({ e: { e: 0, f: 2 } }, obj)) // true
console.log(fn({ e: { f: 2, e: 0 } }, obj)) // true
