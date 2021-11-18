// 借助联合类型使用不同类型

class RangeValidationBase {
    constructor(private start: number, private end: number) { }
    protected RangeCheck(value: number): boolean {
        return value >= this.start && value <= this.end
    }
    protected GetNumber(value: string): number {
        return new Number(value).valueOf()
    }
}


// 使用交叉类型组合类型
// class Grid {
//     Width: number = 0;
//     Height: number = 0;
//     Padding: number = 0;
// }
// class Margin {
//     Left: number = 0;
//     Top: number = 0;
//     Width: number = 10;
//     Height: number = 20;
//     Padding?: number;
// }
// function ConsolidatedGrid(grid: Grid, margin: Margin): Grid & Margin {
//     let consolidatedGrid = <Grid & Margin>{};
//     consolidatedGrid.Width = grid.Width + margin.Width;
//     consolidatedGrid.Height = grid.Height + margin.Height;
//     consolidatedGrid.Top = margin.Top;
//     consolidatedGrid.Left = margin.Left;
//     consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding
//     return consolidatedGrid
// }


// 使用类型别名简化类型声明
type StringOrNumber = string | number;
type NullableStringOrNumber = StringOrNumber | null;

class UnionRangeValidationWidthTypeAlias extends RangeValidationBase {
    IsInRange(value: StringOrNumber): boolean {
        if (typeof value === "number") {
            return this.RangeCheck(value)
        }
        return this.RangeCheck(this.GetNumber(value))
    }
}

// 使用对象展开赋值属性
class Grid {
    Width: number = 0;
    Height: number = 0;
    Padding: number = 0;
}
class Margin {
    Left: number = 0;
    Top: number = 0;
    Width: number = 10;
    Height: number = 20;
    Padding?: number;
}
function ConsolidatedGrid(grid: Grid, margin: Margin): Grid & Margin {
    let consolidatedGrid = <Grid & Margin>{ ...margin, ...grid };
    consolidatedGrid.Width += grid.Width;
    consolidatedGrid.Height += grid.Height;
    consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;
    return consolidatedGrid
}


// 使用REST属性结构对象
function PrintInstruments(log: string, ...instruments: string[]): void {
    console.log(log);
    instruments.forEach(instrument => {
        console.log(instruments);
    });
}
PrintInstruments('Music Shop Inventory', 'Guitar', 'Drums', 'Clarinet', 'Clavinova');


// 使用装饰器进行AOP
interface IDecoratorExample {
    AnyoneCanRun(args: string): void;
    AdminOnly(args: string): void;
}
class NoRoleCheck implements IDecoratorExample {
    AnyoneCanRun(args: string): void {
        if (!IsInRole('user')) {
            console.log(`${currentUser.user} is not in the user role`);
            return;
        }
        console.log(args);
    }
    AdminOnly(args: string): void {
        if (!IsInRole('admin')) {
            console.log(`${currentUser.user} is not in the admin role`);
        }
        console.log(args);
    }
}

let currentUser = { user: 'peter', roles: [{ role: 'user' }, { role: 'admin' }] };
function TestDecoratorExample(decoratorMethod: IDecoratorExample) {
    console.log(`Current user ${currentUser.user}`);
    decoratorMethod.AnyoneCanRun(`Running as user`);
    decoratorMethod.AdminOnly(`Running as admin`);
}
TestDecoratorExample(new NoRoleCheck());
function IsInRole(role: string): boolean {
    return currentUser.roles.some(r => r.role === role);
}

function Admin(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    let originlMethod = descriptor.value;
    descriptor.value = function () {
        if (IsInRole(`admin`)) {
            originlMethod.apply(this, arguments);
            return;
        }
        console.log(`${currentUser.user} is not in the admin role`);
    }
    return descriptor;
}
class DecoratedExampleMethodDecoration implements IDecoratorExample {
    @Role('user')
    AnyoneCanRun(args: string): void {
        console.log(args);
    }
    @Role('admin')
    AdminOnly(args: string): void {
        console.log(args);
    }
}

// 装饰器工厂
function Role(role: string) {
    return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function () {
            if (IsInRole(role)) {
                originalMethod.apply(this, arguments);
                return;
            }
            console.log(`${currentUser.user} is not in the ${role} role`);
        }
        return descriptor;
    }
}

// 使用混入(mixin)组成类型
class ActiveRecord {
    Deleted = false;
}
class Person extends ActiveRecord {
    constructor(firstName: string, lastName: string) {
        super()
        this.FirstName = firstName;
        this.LastName = lastName;
    }
    FirstName: string;
    LastName: string;
}