const zs = {
    name: "zs",
    age: 25,
    career: 'coder'
}

const ls = {
    name: 'ls',
    age: 24,
    career: 'product manager'
}

// 构造函数

// function User(name, age, career) {
//     this.name = name;
//     this.age = age;
//     this.career = career;
// }

// const user = new User(name, age, career);

// 
function Coder(name, age) {
    this.name = name;
    this.age = age;
    this.career = 'coder';
    this.work = ['写代码', '写系分', '修Bug']
}
function productManager(name, age) {
    this.name = name;
    this.age = age;
    this.career = 'productManager'
    this.work = ['订会议室', '写PRD', '催更']
}

// 

// function Factory(name, age, career) {
//     switch (career) {
//         case 'coder':
//             return new Coder(name, age)
//         case 'productManager':
//             return new ProductManager(name, age)
//     }
// }

// 工厂模式
function User(name, age, career, work) {
    this.name = name;
    this.age = age;
    this.career = career;
    this.work = work;
}

function Factory(name, age, career) {
    let work
    switch (career) {
        case 'coder':
            work = ['写代码', '写系分', '修Bug']
            break
        case 'product manager':
            work = ['订会议室', '写PRD', '催更']
            break
        case 'boss':
            work = ['喝茶', '看报', '见客户']
    }
    return new User(name, age, career, work)
}

const user1 = Factory('zs', 28, 'coder')
console.log(user1);

