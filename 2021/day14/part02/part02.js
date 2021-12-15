"use strict";

const InputReader = require("../InputReader");
const ir = new InputReader(__dirname, "_input.txt");

let _input = ir
  .getRawData()
  .split('\r\n\r\n')
  .filter(Boolean)
  .map(lines => {
    const [template, ...pairs] = lines.split('\n')
    pairs.splice(0, 1)
    return { template, pairs };
  });

´
function part2(input) {

 
  console.log("part02 -> ", 0);
}

part2(_input);