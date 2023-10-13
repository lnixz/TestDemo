var compose = function(functions) {
    const len = functions.length
    let val
	return function(x) {
        if(!len) return x
        val = x
        for(let i = len - 1; i >= 0; i--) {
            const fn = functions[i]
            val = fn(val)
        }
        return val
    }
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(fn(4));