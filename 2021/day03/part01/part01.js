'use strict';

const InputReader = require('../InputReader');
const ir = new InputReader(__dirname, '_input.txt');

const bitSets = ir.getDataSplitByLine().map(bitSet => bitSet.split(''));

const zeros = new Array(bitSets[0].length).fill(null);
const ones = new Array(bitSets[0].length).fill(null);

for (const bitSet of bitSets) {
    const bits = [...bitSet];
    bits.forEach((bit, idx) => {
        if (bit === '0') {
            zeros[idx]++;
        } else {
            ones[idx]++;
        }
    });
}

function getRating(x, y, arr) {
    let bitSetRate = '';
    for (let i = 0; i < arr.length; i++) {
        let bit = 0;
        if (x[i] > y[i]) {
            bit = 1
        }
        bitSetRate += bit;
    }
    return bitSetRate;
}

const gammaRate = parseInt(getRating(ones, zeros, bitSets[0]), 2);
const epsilonRate = parseInt(getRating(zeros, ones, bitSets[0]), 2);
const powerConsumption = gammaRate * epsilonRate;

console.log('part01 -> ', powerConsumption);