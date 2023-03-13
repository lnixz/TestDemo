function debounce(fn, delay = 1000) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
            // clearTimeout(timer);
        }, delay);
    }
}
