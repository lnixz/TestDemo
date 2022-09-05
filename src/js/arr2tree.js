let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 3 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门3', pid: 0 },
    { id: 5, name: '部门4', pid: 4 },
    { id: 6, name: '部门5', pid: 0 },
    { id: 7, name: '部门5', pid: 6 },
    { id: 8, name: '部门5', pid: 7 },
]

function arr2Tree(arr, parentId = 0) {
    filterArr = arr.filter(item => item.pid !== parentId);
    return arr.filter((item) => item.pid === parentId).map((item) => {
        item.children = arr2Tree(filterArr, item.id);
        return item;
    })
}
const res = arr2Tree(arr)
console.dir(JSON.parse(JSON.stringify(res)), { depth: null });