'use strict';

const InputReader = require('../InputReader');
const ir = new InputReader(__dirname, '_input.txt');

let fishes = ir.getRawData()
                .split(/[\n,]+/g)
                .filter(Boolean)
                .map(n => Number(n));
                
function part2(){

    let dDay = 256;

    const queue = Array(9).fill(0);
    for (const fish of fishes) {
        queue[fish]++;
    }
    
    for (let i = 0; i < dDay; i++) {
        const currFishes = queue.shift();
        queue.push(currFishes);
        queue[6] += currFishes;
    }

    let fishCount = queue.reduce((a, b) => a + b, 0);
    
    console.log('part02 -> ', fishCount);
}

part2();