function minCheckDuration(goods) {
    // write code here

    const len = goods.length
    if (len === 1) {
        return goods[0]
    } else if (len === 2) {
        return Math.min.apply(null, goods)
    }
    const dp = []
    dp[0] = goods[0]
    dp[1] = goods[1]
    for (let i = 2; i < len; i++) {
        dp[i] = goods[i] + Math.min(goods[i - 1], goods[i - 2])
    }
    return Math.min(dp[dp.length - 1], dp[dp.length - 2])
}

var arr = [4, 9, 14, 10]
// var arr = [4, 9, 24]

console.log(minCheckDuration(arr));