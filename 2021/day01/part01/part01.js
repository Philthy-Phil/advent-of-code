'use strict';

const InputReader = require('../InputReader');
const ir = new InputReader(__dirname, '_input.txt');

const depths = ir.getDataSplitByLine().map(i => Number(i));

let prevDepth = depths[0];
let increaseDepth = 0;

depths.forEach(currDepth => {
    if (currDepth > prevDepth) {
        increaseDepth++;
    }
    prevDepth = currDepth;
});

console.log('part01 -> ', increaseDepth);