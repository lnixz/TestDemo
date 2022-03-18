const mySetInterval = (fn, delay) => {
    let timer = null;
    const interval = () => {
        fn()
        timer = setTimeout(interval, delay)
    }
    timer = setTimeout(interval, delay)
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}

let count = 0;
const interval = mySetInterval(() => {
    count++
    console.log(count);
}, 1000)

setTimeout(() => {
    interval.cancel()
}, 6000)