var root = typeof self == 'object' && self.self === self && self ||
    typeof global == 'object' && global.global === global && global ||
    Function('return this')() || {}

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

function isBoolean(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]'
}

function isElement(obj) {
    return !!(obj && obj.nodeType === 1)
}

function tagTester(name) {
    var tag = '[object ' + name + ']';
    return function (obj) {
        return toString.call(obj) === tag
    }
}

var isString = tagTester('String');
var isNumber = tagTester('Number');
var isDate = tagTester('Date');
var isRegExp = tagTester('RegExp');
var isError = tagTester('Error');
var isSymbol = tagTester('Symbol');
var isArrayBuffer = tagTester('ArrayBuffer');
var isFunction = tagTester('Function');

var nodelist = root.document && root.document.childNodes;
if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    isFunction = function (obj) {
        return typeof obj === 'function' || false;
    }
}