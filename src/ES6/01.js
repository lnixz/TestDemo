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



// 增强的Function构造函数
var add = new Function("first", "second", "return first + second")
console.log(add(1, 1));

// ECMAScript 6增强了Function构造函数的功能，支持在创建函数时定义默认参数和不定参数。唯一需要做的是在参数名后添加一个等号及一个默认值
var add = new Function("first", "second = first", "return first + second")

console.log(add(1, 1));
console.log(add(1));

// 定义不定参数，只需在最后一个参数前添加...
var pickFirst = new Function("...args", "return args[0]")
console.log(pickFirst(1, 2));

// 展开运算符
// 展开运算符可以让你指定一个数组，将它们打散后作为各自独立的参数传入函数

let value1 = 25, value2 = 50;
console.log(Math.max(value1, value2));

let values = [25, 50, 75, 100]
console.log(Math.max.apply(Math, values));
console.log(Math.max(...values));



// ECMAScript 6中为所有函数新增了name属性。
function doSomething() {
    // 空函数
}
var doAnotherThing = function () {
    // 空函数
}

console.log(doSomething.name); // "doSomething"
console.log(doAnotherThing.name); // "doAnotherThing"

// name 属性的特殊情况
var doSomething = function doSomethingElse() {
    // 空函数
}

var person = {
    get firstName() {
        return "Nicholas"
    },
    sayName: function () {
        console.log(this.name);
    }
}

console.log(doSomething.name); // "doSomethingElse"
console.log(person.sayName.name); // "sayName"
console.log(person.firstName.name); // "get firstName"



// 通过bind()函数创建的函数，其名称将带有"bound"前缀；通过Function构造函数创建的函数，其名称将带有前缀"anonymous"

var doSomething = function () {
    // 空函数
}
console.log(doSomething.bind().name); // "bound doSomething"
console.log((new Function()).name); // "anonymous"




// 明确函数的多重用途

// ECMAScript 5及早期版本中的函数具有多重功能，可以结合new使用，函数内的this值将指向一个新对象，函数最终会返回这个新对象

function Person(name) {
    this.name = name;
}

var person = new Person('Nicholas');
var notAPerson = Person('Nicholas');

console.log(person);
console.log(notAPerson);

// JavaScript函数有两个不同的内部方法：[[Call]]和[[Construct]]。
// 当通过new关键字调用函数时，执行的是[[Construct]]函数，它负责创建一个通常被称作实例的新对象，然后再执行函数体，将this绑定到实例上；
// 如果不通过new关键字调用函数，则执行[[Call]]函数，从而直接执行代码中的函数体。具有[[Construct]]方法的函数被统称为构造函数。



// 在ECMAScript 5中判断函数被调用的方法

// 在ECMAScript 5中，如果想确定一个函数是否通过new关键字被调用（或者说，判断该函数是否作为构造函数被调用），最流行的方式是使用instanceof.
function Person(name) {
    if (this instanceof Person) {
        this.name = name; // 如果通过new关键字调用
    } else {
        throw new Error('必须通过new关键字来调用Person')
    }
}

var person = new Person('Nicholas')
var notAPerson = person('Nicholas')

// 通常来讲这样做是正确的，但这个方法也不完全可靠，因为有一种不依赖new关键字的方法也可以将this绑定到Person的实例上

function Person(name) {
    if (this instanceof Person) {
        this.name = name;
    } else {
        throw new Error('必须通过new关键字来调用Person')
    }
}

var person = new Person('Nicholas');
var notAPerson = Person.call(person, "Michael"); // 有效！

// 调用Person.call()时将变量person传入作为第一个参数，相当于在Person函数里将this设为了person实例。
// 对于函数本身，无法区分是通过Person.call()（或者是Person.apply()）还是new关键字调用得到的Person的实例。

// 元属性（Metaproperty）new.target
function Person(name) {
    if (typeof new.target !== 'undefined') {
        this.name = name;
    } else {
        throw new Error('必须通过new关键字来调用Person')
    }
}

var person = new Person('Nicholas')
var notAPerson = Person('Nicholas'); // 抛出错误

// 也可以检查new.target是否被某个特定构造函数所调用
function Person(name) {
    if (typeof new.target === Person) {
        this.name = name;
    } else {
        throw new Error('必须通过new关键字来调用Person')
    }
}

function AnotherPerson(name) {
    Person.call(this, name)
}

var person = new Person('Nicholas')
var anotherPerson = new AnotherPerson("Nicholas"); // 抛出错误


// 块级函数
// ECMAScript 5的严格模式中引入了一个错误提示，当在代码块内部声明函数时程序会抛出错误：

"use strict";
if (true) {
    // 在ES5中抛出语法错误，在ES6中不报错
    function doSomething() {
        // 空函数
    }
}

// 在定义函数的代码块内，块级函数会被提升至顶部
"use strict"
if (true) {
    console.log(typeof doSomething); // "function"
    function doSomething() {
        // 空函数
    }

    doSomething()
}
console.log(typeof doSomething); // "undefined"


// 非严格模式下的块级函数
// 在ECMAScript 6中，即使处于非严格模式下，也可以声明块级函数，但其行为与严格模式下稍有不同。
// 这些函数不再提升至代码块的顶部，而是提升至外围函数或全局作用域的顶部


// ECMAScript 6中的行为
if (ture) {
    console.log(typeof doSomething); // "function"
    function doSomething() {
        // 空函数
    }

    doSomething();

    console.log(typeof doSomething); // "function"
}


// 箭头函数

// 没有this、super、arguments和new.target绑定
// 箭头函数中的this、super、arguments及new.target这些值由外围最近一层非箭头函数决定

// 不能通过new关键字调用
// 箭头函数没有[[Construct]]方法，所以不能被用作构造函数，如果通过new关键字调用箭头函数，程序会抛出错误。

// 没有原型
// 由于不可以通过new关键字调用箭头函数，因而没有构建原型的需求，所以箭头函数不存在prototype这个属性。

// 不可以改变this的绑定
// 函数内部的this值不可被改变，在函数的生命周期内始终保持一致。

// 不支持arguments对象
// 箭头函数没有arguments绑定，所以你必须通过命名参数和不定参数这两种形式访问函数的参数。

// 不支持重复的命名参数
// 无论在严格还是非严格模式下，箭头函数都不支持重复的命名参数；而在传统函数的规定中，只有在严格模式下才不能有重复的命名参数。




// 箭头函数语法

// 创建立即执行函数表达式

let person = function (name) {
    return {
        getName: function () {
            return name
        }
    };
}('Nicholas')

console.log(person.getName()); // "Nicholas"


let person = ((name) => {
    return {
        getName: function () {
            return name
        }
    };
})('Nicholas')

console.log(person.getName()); // "Nicholas"



// 箭头函数没有this绑定

let PageHandler = {
    id: "123456",
    init: function () {
        document.addEventListener("click", function (event) {
            this.doSomething(event.type); // 抛出错误
        }, false);
    },

    doSomething: function (type) {
        console.log("Handing" + type + " for " + this.id);
    }
}


// 可以使用bind()方法显式地将this绑定到PageHandler函数上来修正这个问题
PageHandler = {
    id: "123456",
    init: function () {
        document.addEventListener("click", (function (event) {
            this.doSomething(event.type); // 抛出错误
        }).bind(this), false);
    },

    doSomething: function (type) {
        console.log("Handing" + type + " for " + this.id);
    }
}


// 如果箭头函数被非箭头函数包含，则this绑定的是最近一层非箭头函数的this；
// 否则，this的值会被设置为undefined

PageHandler = {
    id: "123456",
    init: function () {
        document.addEventListener("click", 
            event => this.doSomething(event.type), false);
    },

    doSomething: function (type) {
        console.log("Handing" + type + " for " + this.id);
    }
}

