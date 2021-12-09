const arr = [1, 2, 3, 2, 3];

function fn(arr = []) {
    let eor = 0;
    for (let i = 0; i < arr.length; i++) {
        eor ^=arr[i]
    }
    return eor
}

console.log(fn(arr));

const arr2 = [1, 2, 3, 2, 3, 4]
function fn2(arr2 = []) {
    let eor = 0;
    for (let i = 0; i < arr2.length; i++) {
        eor ^=arr2[i]
    }

    let rightOne = eor & (~eor + 1)
    let onlyOne = 0
    for (let i = 0; i < arr2.length; i++) {
        if ((rightOne & arr2[i]) == 0) {
            onlyOne ^= arr2[i]
        }
    }
    return [onlyOne, (eor ^ onlyOne)]
}

console.log(fn2(arr2));