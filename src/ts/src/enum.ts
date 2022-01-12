// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}

console.log(Role.Reporter);
console.log(Role);

// 原理：反向映射
// var Role;
// (function (Role) {
//     Role[Role["Reporter"] = 1] = "Reporter";
//     Role[Role["Developer"] = 2] = "Developer";
//     Role[Role["Maintainer"] = 3] = "Maintainer";
//     Role[Role["Owner"] = 4] = "Owner";
//     Role[Role["Guest"] = 5] = "Guest";
// })(Role || (Role = {}));

// 字符串枚举
// 字符串枚举不可以进行反向映射
enum Message {
    Success = '成功',
    Fail = '失败'
}

// 异构枚举
enum Answer {
    N,
    Y = 'Yse'
}

// 枚举成员
// Role.Reporter = 2
enum Char {
    //  const 
    a,
    b = Char.a,
    c = 1 + 3,
    // computed
    d = Math.random(),
    e = '123'.length,
    f = 0
}

// 常量枚举
// 编译阶段被移除
const enum Month {
    Jna,
    Feb,
    Mar
}
let month = [Month.Jna, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3

let e1: E.a = 1
let e2: E.b
let e3: E.a = 1

let g1: G = G.b
let g2: G.a = G.a


