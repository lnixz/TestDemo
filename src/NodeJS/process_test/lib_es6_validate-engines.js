const path = require('path');

const node = process.version;
console.log(node);

const argv = process.argv;
console.log(argv);

const pwd = process.cwd();
console.log(pwd);

console.log(__dirname);

console.log(path.basename(path.dirname(__dirname)));

console.log(path.join(__dirname, '/a/b' ,'./hello.js'));

console.log(path.resolve(__dirname, '/a/b' ,'./hello.js'));
