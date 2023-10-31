import * as parser from "@babel/parser";
import * as t from "@babel/types";
import template from "@babel/template";
import generate from "@babel/generator";

const buildRequire = template.default(`
  var %%importName%% = require(%%source%%);
`);

const ast = buildRequire({
  importName: t.identifier("myModule"),
  source: t.stringLiteral("my-module"),
});

console.log(generate.default(ast).code);
