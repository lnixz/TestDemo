
const add = (a, b, c) => a + b + c;
const currying = (fn, ...args) => {
    let allArgs = [...args]
    const num = fn.length
    const res = (...args2) => {
        allArgs = [...allArgs, ...args2]
        if (allArgs.length === num) {
            return fn(...allArgs)
        } else {
            return res
        }
    }
    return res
}
const a = currying(add);
console.log(a(1)(2)(5))