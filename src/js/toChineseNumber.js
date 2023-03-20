/**
 * @description 阿拉伯数字转中文
 * @param {*} num 
 * @returns 
 */
function toChineseNumber(num) {
    if (num.toString().split('').every(i => i === '0')) return '零';
    const strs = num.toString().replace(/(?=(\d{4})+$)/g, ',').split(',');
    const number = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const unit = ['', '十', '百', '千'];
    const bigUnit = ['', '万', '亿'];
    function _transform(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            const c = number[str[i]];
            const u = unit[str.length - 1 - i];
            if (c === '零') {
                if (result[result.length - 1] !== '零') {
                    result += c;
                }
            } else {
                result += c + u;
            }
        }
        if (result[result.length - 1] === '零') {
            result = result.slice(0, -1);
        }
        return result;
    }
    let res = '';
    for (let i = 0; i < strs.length; i++) {
        const r = _transform(strs[i]);
        const u = (r && r !== '零') ? bigUnit[strs.length - 1 - i] : '';
        res += r + u;
    }
    return res;
}

console.log(toChineseNumber('0000')); // 零
console.log(toChineseNumber('1560')); // 一千五百六十
console.log(toChineseNumber('12700')); // 一万二千七百
console.log(toChineseNumber('82603')); // 八万二千六百零三
console.log(toChineseNumber('32600000567')); // 三百二十六亿零五百六十七
console.log(toChineseNumber('5264567567')); // 五十二亿六千四百五十六万七千五百六十七







