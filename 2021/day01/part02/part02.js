'use strict';

const InputReader = require('../InputReader');
const ir = new InputReader(__dirname, '_input.txt');

const depths = ir.getDataSplitByLine().map(i => Number(i));

let prevDepth = 0;
let currDepth = 0;
let increaseDepth = 0;

for (let i = 3; i < depths.length; i++) {
    prevDepth = depths[i - 1] + depths[i - 2] + depths[i - 3];
    currDepth = depths[i] + depths[i - 1] + depths[i - 2];
    if (currDepth > prevDepth) {
        increaseDepth++;
    }
}

console.log('part02 -> ', increaseDepth);