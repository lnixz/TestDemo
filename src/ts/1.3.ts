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
