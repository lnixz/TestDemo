export default function apply(Fn, obj, args) {
    if (obj === undefined || obj === null) {
        obj = globalThis; // 全局对象
    }
    obj.temp = Fn;

    let result = obj.temp(...args);

    delete obj.temp;

    return result;
}

// Function.prototype.myCall = function (contenxt) {
//     context = context || window //如果context为null，则context是window
//     context.fn = this //将this整个对象赋值给fn
//     let arr = [...arguments].slice(1) //获取除context外的剩余所有参数
//     result = context.fn(...arr)  // context调用fn，fn中的this就是context
//     delete context.fn
//     return result
// }

// let context = {
//     fn: function () {
//         console.log(this);
//     }
// }
// context.fn.myCall(context)

// function Dog() {
//     this.name = 'Dog'
// }
