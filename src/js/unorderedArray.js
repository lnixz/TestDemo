const shuffle = (arr) => {
    return arr.sort(() => {
        return Math.random() > 0.5 ? 1 : -1
    })
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
console.log(shuffle(arr));
