// 颜色十六进制表示有2种, #AAB #333 #ffffff #343434
// 将十六进制的颜色值转换成rgb格式，如#000 ——> rgb(0,0,0) #ffffff ——> rgb(255,255,255)
// 不合法直接返回原字符串

function hex2rgb(hex) {
    // 第一步 判断颜色值是否合法，
    const regexp = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
    if (!regexp.test(hex)) return hex;

    // 第二步 颜色转化
    const str = hex.replace('#', '')
    if (str.length === 3) {
        const arr = str.split('').map(el => el + el)
        return `rgb(${HEX(arr[0])},${HEX(arr[1])},${HEX(arr[2])})`
    } else {
        return `rgb(${HEX(str.substring(0, 2))},${HEX(str.substring(2, 4))}, ${HEX(str.substring(4,6))})`
    } 
}

function HEX(str) {
    return parseInt(str, 16)
}

console.log(hex2rgb('#1234'));
console.log(hex2rgb('fcb234'));
console.log(hex2rgb('#ffffff'));
console.log(hex2rgb('#000'));
console.log(hex2rgb('#ABCDef'));