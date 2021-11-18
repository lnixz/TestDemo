// 借助联合类型使用不同类型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RangeValidationBase = /** @class */ (function () {
    function RangeValidationBase(start, end) {
        this.start = start;
        this.end = end;
    }
    RangeValidationBase.prototype.RangeCheck = function (value) {
        return value >= this.start && value <= this.end;
    };
    RangeValidationBase.prototype.GetNumber = function (value) {
        return new Number(value).valueOf();
    };
    return RangeValidationBase;
}());
var UnionRangeValidationWidthTypeAlias = /** @class */ (function (_super) {
    __extends(UnionRangeValidationWidthTypeAlias, _super);
    function UnionRangeValidationWidthTypeAlias() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnionRangeValidationWidthTypeAlias.prototype.IsInRange = function (value) {
        if (typeof value === "number") {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    };
    return UnionRangeValidationWidthTypeAlias;
}(RangeValidationBase));
// 使用对象展开赋值属性
var Grid = /** @class */ (function () {
    function Grid() {
        this.Width = 0;
        this.Height = 0;
        this.Padding = 0;
    }
    return Grid;
}());
var Margin = /** @class */ (function () {
    function Margin() {
        this.Left = 0;
        this.Top = 0;
        this.Width = 10;
        this.Height = 20;
    }
    return Margin;
}());
function ConsolidatedGrid(grid, margin) {
    var consolidatedGrid = __assign(__assign({}, margin), grid);
    consolidatedGrid.Width += grid.Width;
    consolidatedGrid.Height += grid.Height;
    consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;
    return consolidatedGrid;
}
// 使用REST属性结构对象
function PrintInstruments(log) {
    var instruments = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        instruments[_i - 1] = arguments[_i];
    }
    console.log(log);
    instruments.forEach(function (instrument) {
        console.log(instruments);
    });
}
PrintInstruments('Music Shop Inventory', 'Guitar', 'Drums', 'Clarinet', 'Clavinova');
var NoRoleCheck = /** @class */ (function () {
    function NoRoleCheck() {
    }
    NoRoleCheck.prototype.AnyoneCanRun = function (args) {
        if (!IsInRole('user')) {
            console.log(currentUser.user + " is not in the user role");
            return;
        }
        console.log(args);
    };
    NoRoleCheck.prototype.AdminOnly = function (args) {
        if (!IsInRole('admin')) {
            console.log(currentUser.user + " is not in the admin role");
        }
        console.log(args);
    };
    return NoRoleCheck;
}());
var currentUser = { user: 'peter', roles: [{ role: 'user' }, { role: 'admin' }] };
function TestDecoratorExample(decoratorMethod) {
    console.log("Current user " + currentUser.user);
    decoratorMethod.AnyoneCanRun("Running as user");
    decoratorMethod.AdminOnly("Running as admin");
}
TestDecoratorExample(new NoRoleCheck());
function IsInRole(role) {
    return currentUser.roles.some(function (r) { return r.role === role; });
}
function Admin(target, propertyKey, descriptor) {
    var originlMethod = descriptor.value;
    descriptor.value = function () {
        if (IsInRole("admin")) {
            originlMethod.apply(this, arguments);
            return;
        }
        console.log(currentUser.user + " is not in the admin role");
    };
    return descriptor;
}
var DecoratedExampleMethodDecoration = /** @class */ (function () {
    function DecoratedExampleMethodDecoration() {
    }
    DecoratedExampleMethodDecoration.prototype.AnyoneCanRun = function (args) {
        console.log(args);
    };
    DecoratedExampleMethodDecoration.prototype.AdminOnly = function (args) {
        console.log(args);
    };
    __decorate([
        Role('user')
    ], DecoratedExampleMethodDecoration.prototype, "AnyoneCanRun");
    __decorate([
        Role('admin')
    ], DecoratedExampleMethodDecoration.prototype, "AdminOnly");
    return DecoratedExampleMethodDecoration;
}());
// 装饰器工厂
function Role(role) {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            if (IsInRole(role)) {
                originalMethod.apply(this, arguments);
                return;
            }
            console.log(currentUser.user + " is not in the " + role + " role");
        };
        return descriptor;
    };
}
