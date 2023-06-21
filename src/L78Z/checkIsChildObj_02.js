function checkIsChildObject(a, b) {  
  // 递归遍历 a 和 b 的属性，逐一比较  
  for (let key in a) {  
    // 如果 a 和 b 都有名为 key 的属性，且值相等，则继续比较下一个属性  
    if (key in b && a[key] === b[key]) {  
      continue;  
    }  
    // 如果 a 和 b 的属性名相同，但值不同，则返回 false，表示不是子对象  
    else if (key in b) {  
      return false;  
    }  
    // 如果 b 没有名为 key 的属性，则返回 false，表示不是子对象  
    else {  
      return false;  
    }  
  }  
  // 如果 a 和 b 的属性全部匹配成功，则返回 true，表示 a 是 b 的子对象  
  return true;  
}




// 检查 a 是否为 b 的子对象
const obj =
{
  a: 0,
  c: '',
  d: true,
  e: {
    f: 1,
    e: {
      e: 0,
      f: 2
    }
  }
}

console.log(checkIsChildObject({ a: 0 }, obj)) // true
console.log(checkIsChildObject({ a: 0, d: true }, obj))// true
console.log(checkIsChildObject({ e: 0 }, obj))// true
console.log(checkIsChildObject({ a: 0, c: '' }, obj)) // true
console.log(checkIsChildObject({ a: 0, e: 0 }, obj))// false
console.log(checkIsChildObject({ e: { f: 1 } }, obj))// true
console.log(checkIsChildObject({ e: { f: 2 } }, obj))// true
console.log(checkIsChildObject({ e: { e: 0, f: 2 } }, obj)) // true
console.log(checkIsChildObject({ e: { f: 2, e: 0 } }, obj))// true
console.log(checkIsChildObject({ a: 0, e: { f: 1 } }, obj))// true
console.log(checkIsChildObject({ a: 0, e: { f: 1, e: { f: 2 } } }, obj))// true
console.log(checkIsChildObject({ a: 0, e: { f: 1, e: { e: 0, f: 2 } } }, obj))// true
// console.log(checkIsChildObject({ e: 0, f: 2 }, obj)) // true
// console.log(checkIsChildObject({ f: 2, e: 0 }, obj))// true

