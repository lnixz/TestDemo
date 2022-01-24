function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
console.log(isObject(null));

function isNull(obj) {
    return obj === null;
}
console.log(isNull(null));

function isUndefined(obj) {
    return obj === void 0;
}
console.log(isUndefined(undefined));

