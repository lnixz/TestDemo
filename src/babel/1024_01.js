const parser = require('@babel/parser');

const ast = parser.parse(`
    const a = 100;
    console.log(a);
`, {
    sourceType: 'unambiguous',
});

console.log(ast);
console.log(ast.program);
console.log(ast.program.body);
console.log(ast.program.body[0].declarations);