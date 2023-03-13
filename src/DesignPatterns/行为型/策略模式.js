/**
 * 用例：
 * 
● 当价格类型为“预售价”时，满 100 - 20，不满 100 打 9 折
● 当价格类型为“大促价”时，满 100 - 30，不满 100 打 8 折
● 当价格类型为“返场价”时，满 200 - 50，不叠加
● 当价格类型为“尝鲜价”时，直接打 5 折
 */
// 询价方法，接受价格标签和原价为入参 
function askPrice(tag, originPrice) {
    // 处理预热价   
    if (tag === 'pre') {
        if (originPrice >= 100) {
            return originPrice - 20
        }
        return originPrice * 0.9
    }
    // 处理大促价  
    if (tag === 'onSale') {
        if (originPrice >= 100) {
            return originPrice - 30
        }
        return originPrice * 0.8
    }
    // 处理返场价  
    if (tag === 'back') {
        if (originPrice >= 200) {
            return originPrice - 50
        }
        return originPrice
    }
    // 处理尝鲜价  
    if (tag === 'fresh') {
        return originPrice * 0.5
    }
}


// 违背了“单一功能”原则
// 违背了“开放封闭”原则

// 单一功能改造:(抽离函数)

// 处理预热价 
function prePrice(originPrice) {
    if (originPrice >= 100) {
        return originPrice - 20
    }
    return originPrice * 0.9
}
// 处理大促价
function onSalePrice(originPrice) {
    if (originPrice >= 100) {
        return originPrice - 30
    }
    return originPrice * 0.8
}
// 处理返场价 
function backPrice(originPrice) {
    if (originPrice >= 200) {
        return originPrice - 50
    }
    return originPrice
}
// 处理尝鲜价 
function freshPrice(originPrice) {
    return originPrice * 0.5
}

function askPrice(tag, originPrice) {
    // 处理预热价 
    if (tag === 'pre') {
        return prePrice(originPrice)
    }
    // 处理大促价 
    if (tag === 'onSale') {
        return onSalePrice(originPrice)
    }
    // 处理返场价 
    if (tag === 'back') {
        return backPrice(originPrice)
    }
    // 处理尝鲜价 
    if (tag === 'fresh') {
        return freshPrice(originPrice)
    }
}


// 开放封闭原则
// 定义一个询价处理器对象
const priceProcessor = {
    pre(originPrice) {
        if (originPrice >= 100) {
            return originPrice - 20;
        }
        return originPrice * 0.9;
    },
    onSale(originPrice) {
        if (originPrice >= 100) {
            return originPrice - 30;
        }
        return originPrice * 0.8;
    },
    back(originPrice) {
        if (originPrice >= 200) {
            return originPrice - 50;
        }
        return originPrice;
    },
    fresh(originPrice) {
        return originPrice * 0.5;
    },
};

function askPrice(tag, originPrice) {
    return priceProcessor[tag](originPrice);
}