const fs = require('fs');
const path = require('path');
console.log(__dirname);
console.log(path.dirname(__dirname));

console.log(path.resolve('abc.txt'));
console.log(path.resolve(__dirname));

const state = fs.statSync('./package.json')
console.log(state);

fs.stat('./index.js', (err, state) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(state);
})

fs.promises.stat('./index.js')
    .then(state => {
        console.log(state);
    })
    .catch(err => {
        console.log(err);
    });

fs.open('./apply.js', 'r', (err, fd) => {
    console.log(fd);

    fs.fstat(fd, (err, stat) => {
        console.log(state);
    })
})

// const content = '1238979你好！世界！🌞'
// fs.writeFile('./01.txt', content, {}, err => {
//     console.log(err);
// })

fs.readFile('./01.txt', { encoding: 'utf-8' }, (err, data) => {
    console.log(data);
})