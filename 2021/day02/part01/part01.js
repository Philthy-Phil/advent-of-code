'use strict';

const InputReader = require('../InputReader');
const ir = new InputReader(__dirname, '_input.txt');

const courses = ir.getDataSplitByLine();

let horicontalPos = 0;
let depth = 0;

courses.forEach(course => {
    let instr = course.split(' ');

    if (instr[0][0] === 'f') {
        horicontalPos += parseInt(instr[1]);
    }
    if (instr[0][0] === 'u') {
        depth -= parseInt(instr[1]);
    }
    if (instr[0][0] === 'd') {
        depth += parseInt(instr[1]);
    }
});

let currPos = [horicontalPos, depth];
let num = currPos[0] * currPos[1];

console.log('part01 -> ', num);