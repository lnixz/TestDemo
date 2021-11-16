// let str = 'hello world!';

// let regexp = /world/

// console.log(str.search(regexp));

let str = '+7(903)-123-45-67';
let regexp = /\d/g

console.log(str.match(regexp).join(''));
console.log(str.replace(/\D/g, ''));