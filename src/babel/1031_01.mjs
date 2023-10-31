import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import t from "@babel/types";


const ast = parser.parse(`
    const a = 100;
    console.log(a);
`, {
    sourceType: 'unambiguous',
    sourceFilename: 'a.js',
});

traverse.default(ast, {
    VariableDeclaration:{
        enter(path, state) {
            console.log(path.node);
            // console.log(state);
        },
        exit(path, state) { },
    },
    enter(path, state) {
        if(t.isNumericLiteral(path.node)) {
            console.log(path.node);
        }
    }
});