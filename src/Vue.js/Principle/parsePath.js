/**
 * 简单路径解析
 */

const bailRE = /[^\w.$]/
export function parsePath(path) {
    if (bailRE.test(path)) {
        return
    }
    const segments = path.split('.')
    console.log(segments);
    return function (obj) {
        console.log(segments);
        for (let i = 0; i < segments.length; i++) {
            if (!obj) return
            console.log(obj);
            obj = obj[segments[i]]
            console.log(obj);
        }
        return obj
    }
}

// const vm = {
//     data: { 
//         a: {
//             b: {
//                 c: 'nihao'
//             }
//         }
//     }
// }
// const fn = parsePath('data.a.b.c')
// const result = fn(vm)
// console.log(result);