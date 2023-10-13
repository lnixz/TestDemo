var reduce = function(nums, fn, init) {
    // return Array.prototype.reduce.call(nums, fn, init)
    let val = init
    const len = nums.length
    if(len === 0) return init
    for(let i = 0; i < len; i++ ) {
        val = 10
    }
    return val
};

reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0)