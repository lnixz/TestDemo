// 块级作用域绑定

function getValue(condition) {
    if (condition) {
        var value = "bule";
        return condition
    } else {
        return null;
    }
}
/*

块级作用域绑定的let和const为JavaScript引入了词法作用域，它们声明的变量不会提升，而且只可以在声明这些变量的代码块中使用。
如此一来，JavaScript声明变量的语法与其他语言更相似了，同时也大幅降低了产生错误的几率，因为变量只会在需要它们的地方声明。
与此同时，这一新特性还存在一个副作用，即不能在声明变量前访问它们，就算用typeof这样安全的操作符也不行。在声明前访问块级绑定会导致错误，因为绑定还在临时死区（TDZ）中。
let和const的行为很多时候与var一致。然而，它们在循环中的行为却不一样。
在for-in和for-of循环中，let和const都会每次迭代时创建新绑定，从而使循环体内创建的函数可以访问到相应迭代的值，而非最后一次迭代后的值（像使用var那样）。
let在for循环中同样如此，但在for循环中使用const声明则可能引发错误。
当前使用块级绑定的最佳实践是：默认使用const，只在确实需要改变变量的值时使用let。
这样就可以在某种程度上实现代码的不可变，从而防止某些错误的产生。
*/

// 在ECMAScript 5中模拟默认参数
function makeRequest(url, timeout, callback) {
    timeout = timeout || 2000;
    callback = callback || function () { };
    
    // 函数的其余部分
}

// 然而这个方法也有缺陷，如果我们想给makeRequest函数的第二个形参timeout传入值0，即使这个值是合法的，也会被视为一个false值，并最终将timeout赋值为2000。
// 更安全的做法
function makeRequest(url, timeout, callback) {
    timeout = (typeof timeout !== 'undefined') ? timeout : 2000;
    callback = (typeof callback !== 'undefined') ? callback : function () { };
    // 函数的其余部分
}

// ECMAScript 6中的默认参数值
function makeRequest(url, timeout = 2000, callback = function () { }) {
    // 函数的其余部分
}

// 默认参数值对arguments对象的影响

function mixArgs(first, second) {
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d";
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}


// 默认参数表达式
// 关于默认参数值，最有趣的特性可能是非原始值传参了。举个例子，你可以通过函数执行来得到默认参数的值，就像这样：

function getValue() {
    return 5
}

function add(first, second = getValue()) {
    return first + second
}
console.log(add(1, 1)); // 2
console.log(add(1)); // 6

// 函数参数有自己的作用域和临时死区，其与函数体的作用域是各自独立的，也就是说参数的默认值不可访问函数体内声明的变量。



// ECMAScript 5中的无命名参数
// 尽管arguments对象检查在大多数情况下运行良好，但是实际使用起来却有些笨重。

function pick(object) {
    let result = Object.create(null);

    // 从第二个参数开始
    for (let i = 1, len = arguments.length; i < len; i++) {
        result[arguments[i]] = object[arguments[i]];
    }

    return result;
}

let book = {
    title: "ECMAScript6",
    author: "Nicholas C. Zakas",
    year: 2016
};

let bookData = pick(book, "author", "year");

// 关于pick()函数应该注意这样几件事情：
// 首先，并不容易发现这个函数可以接受任意数量的参数，当然，可以定义更多的参数，但是怎么也达不到要求；
// 其次，因为第一个参数为命名参数且已被使用，当你要查找需要拷贝的属性名称时，不得不从索引1而不是索引0开始遍历arguments对象。
// 牢记真正的索引位置并不难，但这总归是我们需要牵挂的问题。


// 而在ECMAScript 6中，通过引入不定参数（rest parameters）的特性可以解决这些问题。
// 不定参数

function pick(object, ...keys) {
    let result = Object.create(null);

    for (let i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }

    return result;
}

// 函数的length属性统计的是函数命名参数的数量，不定参数的加入不会影响length属性的值。
// 在本示例中，pick()函数的length值为1，因为只会计算object。

// 不定参数的使用限制
    // 首先，每个函数最多只能声明一个不定参数，而且一定要放在所有参数的末尾。
    // 不定参数不能用于对象字面量setter之中
let object = {
    // 语法错误: 不可以在setter中使用不定参数
    set name(...value) {

    }
};

// 之所以存在这条限制，是因为对象字面量setter的参数有且只能有一个。
// 而在不定参数的定义中，参数的数量可以无限多，所以在当前上下文中不允许使用不定参数。


