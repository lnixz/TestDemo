function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}

function isEqual(target, source, property) {
  return target[property] === source[property]
}

function isHasProperty(obj, property) {
  return obj[property] !== undefined || Object.prototype.hasOwnProperty.call(obj, property)
}

function checkIsChildObject(target, source) {
  for (const k in target) {
    if (!checkObjProperty(target, source, k)) return false;
  }
  return true;
}

function checkObjProperty(target, source, property) {
  var tag = false
  if (isObject(target[property]) && isObject(source[property])) {
    return checkIsChildObject(target, source[property]) || checkIsChildObject(target[property], source[property])
  }
  for (const k in source) {
    if (isObject(source[k]) && Object.keys(target).length === 1) {
      if (isHasProperty(source, property)) {
        return isEqual(target, source, property) || checkObjProperty(target, source[property], property)
      } else {
        return checkObjProperty(target, source[property], property)
      }
    }
    if (isEqual(target, source, property)) {
      tag = true
    }
  }
  return tag
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

