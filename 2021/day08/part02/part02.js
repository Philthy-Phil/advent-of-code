"use strict";

const InputReader = require("../InputReader");
const ir = new InputReader(__dirname, "_input.txt");

let _input = ir
  .getRawData()
  .split('\n')
  .filter(Boolean)
  .map(line => {
    const [signalPatterns, outputValues] = line
      .split(' | ')
      .map(part => part
        .trim()
        .split(' ')
      );
    return { signalPatterns, outputValues };
  });

function part2(input) {

  // 0 => 6
  // 1 => 2 <- X
  // 2 => 5 
  // 3 => 5 
  // 4 => 4 <- X
  // 5 => 5 
  // 6 => 6 
  // 7 => 3 <- X
  // 8 => 7 <- X
  // 9 => 6 

  let count = 0;

  for (const line of input) {
    const matches = line.outputValues.filter(value => [2, 4, 3, 7].includes(value.length));
    count += matches.length;
  }

  console.log("part02 -> ", count);
}
part2(_input);