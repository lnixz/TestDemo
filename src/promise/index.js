// let p = new Promise((resolve, reject) => {
//     setTimeout(reject, 10000);
// })

// setTimeout(console.log, 0, p)
// setTimeout(console.log, 11000, p)

// let p1 = new Promise((resolve, reject) => resolve())
// let p2 = Promise.resolve()

// setTimeout(console.log, 0, Promise.resolve())
// setTimeout(console.log, 0, Promise.resolve(3))
// setTimeout(console.log, 0, Promise.resolve(4, 5, 6))

// let p = Promise.resolve(7)

// setTimeout(console.log, 0, p === Promise.resolve(p))
// setTimeout(console.log, 0, p === Promise.resolve(Promise.resolve(p)))

// let p = new Promise((resolve, reject) => { })
// setTimeout(console.log, 0, p)
// setTimeout(console.log, 0, Promise.resolve(p))
// setTimeout(console.log, 0, p === Promise.resolve(p))

// let p = Promise.resolve(new Error("foo"));
// setTimeout(console.log, 0, p);
// try {
//     throw new Error("foo")
// } catch (e) {
//     console.log(e);
// }

// try {
//     Promise.reject(new Error("foo"));
// } catch (e) {
//     console.log(e);
// }


