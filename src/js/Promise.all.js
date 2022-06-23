// Promise.all()

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });

// Promise.all([1, 2, 3, 4]).then((values) => {
//     console.log(values);
// })

// Promise.all([]).then((values) => {
//     console.log(values);
// })

// var p = Promise.all([1,2,3]);
// var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// var p3 = Promise.all([1,2,3, Promise.reject(555)]);

// setTimeout(function(){
//     console.log(p);
//     console.log(p2);
//     console.log(p3);
// });

function MyPromiseAll(promisesArray) {
    // 返回一个 promise 对象
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promisesArray)) return reject(new Error('Promise promisesArray is not Array'));
        const res = [];
        if(promisesArray.length === 0) return resolve([]);
        for (let i = 0; i < promisesArray.length; i++) {
            Promise.resolve(promisesArray[i]).then(value => {
                res.push(value);
                if (res.length === promisesArray.length) {
                    resolve(res);
                }
            })
        }
    })
}

MyPromiseAll([1,2,3]).then(value => {
    console.log(value);
})

MyPromiseAll([]).then(value => {
    console.log(value);
})






