function myNew(fn, ...args) {
    const obj = {}
    obj.__proto__ = fn.prototype
    fn.apply(obj, args)
    return obj
}

function Person(name, age) {
    this.name = name
    this.age = age
    this.say = function () {
        console.log(`My name is ${this.name}, age is ${this.age}`);
    }
}

const p = myNew(Person, 'zs', 18)
console.log(p);
console.log(p.name);
console.log(p.age);
p.say()