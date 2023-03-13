const Promise = require('../promise')

// let p1 = new Promise((resolve, reject) => resolve())
// setTimeout(console.log, 0, p1)
// let p2 = new Promise((resolve, reject) => reject())
// setTimeout(console.log, 0, p2)

// new Promise(() => setTimeout(console.log, 0, 'executor'))
// setTimeout(console.log, 0, 'promise initialization')

// let p = new Promise((resolve, reject) => {
//     resolve(1)
//     reject(2)
// })
// setTimeout(console.log, 0, p)

// let p = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000 * 5)
// })
// setTimeout(console.log, 0, p)
// setTimeout(console.log, 1000 * 6, p)

// setTimeout(console.log, 0,
//     Promise.resolve(new Promise((resolve, reject) => reject(666)))
// )
// setTimeout(console.log, 0, Promise.resolve(3))
// setTimeout(console.log, 0, Promise.reject(4, 5, 6))

// let p = Promise.resolve(7)
// setTimeout(console.log, 0, p === Promise.resolve(p))
// setTimeout(console.log,0, p === Promise.resolve(Promise.resolve(p)))

// let p = new Promise(() => { })
// setTimeout(console.log, 0, p)
// setTimeout(console.log, 0, Promise.resolve(p))
// setTimeout(console.log, 0, p === Promise.resolve(p))

// let p = Promise.resolve(new Error('foo'));
// setTimeout(console.log, 0, p)

// let p = Promise.reject(3)
// setTimeout(console.log, 0, p)
// p.then(null, (e) => setTimeout(console.log, 0, e))

// setTimeout(console.log, 0,Promise.reject(Promise.resolve(1234)))

// try {
//     throw new Error('foo')
// } catch (e) {
//     console.log(e);
// }
// try {
//     Promise.reject(new Error('foo'))
// } catch (e) {
//     console.log(e);
// }

// function onResolved(id) {
//     setTimeout(console.log, 0, id, 'resolved');
// }

// function onRejected(id) {
//     setTimeout(console.log, 0, id, 'rejected');
// }

// let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000))
// let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000))

// p1.then(
//     () => onResolved('p1'),
//     () => onRejected('p1'),
// )

// p2.then(
//     () => onResolved('p2'),
//     () => onRejected('p2'),
// )

// Promise.resolve(1).then(
//     () => onResolved('p'),
//     () => onRejected('p'),
// )

// p1.then('bar')
// p2.then(null, () => onRejected('p2'))

let p1 = new Promise(() => { })
let p2 = p1.then()
setTimeout(console.log, 0, p1)
setTimeout(console.log, 0, p2)
setTimeout(console.log, 0, p1 === p2)