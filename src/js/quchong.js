const quchong = (arr) => {
    return [...new Set(arr)];
}
const arr = [1, 2, 2, 3, 1, 4, 5, 4, 3, 2, 5]
console.log(quchong(arr));

const quchong2 = (arr) => {
    const res = []
    arr.reduce((acc, cur) => {
        if (!acc.has(cur)) {
            acc.set(cur, 1)
            res.push(cur)
        }
        return acc
    },
        new Map()
    )
    return res;
}

console.log(quchong2(arr));