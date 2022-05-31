// let price = 5
// let quantity = 2
// let total = price * quantity

// console.log(`total is ${total}`);

// price = 20

// console.log(`total is ${total}`);

/** */

// let price = 5
// let quantity = 2
// let total = 0

// let dep: Set<any> = new Set()

// let effect = () => { total = price * quantity }
// function track() { dep.add(effect) }
// function trigger() { dep.forEach((effect: () => void) => effect()) }

// track()
// effect()

// console.log(`total is ${total}`);
// quantity = 3
// console.log(`quantity is ${quantity}`);
// console.log(`total is ${total}`);
// trigger()
// console.log(`total is ${total}`);

/** */

// let product = { price: 5, quantity: 2 }
// let total = 0

// let effect = () => { total = product.price * product.quantity }
// const depsMap = new Map()

// function track(key: string) {
//   let dep = depsMap.get(key)
//   if (!dep) {
//     depsMap.set(key, (dep = new Set()))
//   }
//   dep.add(effect)
// }

// function trigger(key: string) {
//   let dep = depsMap.get(key)
//   if (dep) {
//     dep.forEach((effect: () => void) => {
//       effect()
//     })
//   }
// }

// track('quantity')
// effect()

// console.log(`total is ${total}`);
// product.quantity = 3
// console.log(`quantity is ${product.quantity}`);
// trigger('quantity')
// console.log(`total is ${total}`);


/** */
const targetMap = new WeakMap<object, any>()

function track(target, key: string) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  dep.add(effect)
}

function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) { return }
  let dep = depsMap.get(key)
  if (dep) {
    dep.forEach((effect: () => void) => effect())
  }
}

let product = { price: 5, quantity: 2 }
let total = 0
let effect = () => { total = product.price * product.quantity }

track(product, 'quantity')
effect()





