'use strict';

const InputReader = require('../InputReader');
const ir = new InputReader(__dirname, '_input.txt');

const bitSets = ir.getDataSplitByLine().map(bitSet => bitSet.split(''));

function getCount(sets) {
    const zeros = new Array(sets[0].length).fill(null);
    const ones = new Array(sets[0].length).fill(null);
    
    for (const set of sets) {
        const bits = [...set];
        bits.forEach((bit, idx) => {
            if (bit === '0') {
                zeros[idx]++;
            } else {
                ones[idx]++;
            }
        });
    }
    return { zeros, ones };
}

function getOxygenRating(sets, idx = 0) {
    const { zeros, ones } = getCount(sets);
    let mostCommonBit = '1';
    if (zeros[idx] > ones[idx]) {
        mostCommonBit = '0';
    }
    const filtered = sets.filter(set => set[idx] === mostCommonBit);
    if (filtered.length === 1) {
        return filtered[0];
    }
    return getOxygenRating(filtered, idx+1);
}

function getCO2Rating(sets, idx = 0) {
    const { zeros, ones } = getCount(sets);
    let leastCommonBit = '0';
    if (zeros[idx] > ones[idx]) {
        leastCommonBit = '1';
    }
    const filtered = sets.filter(set => set[idx] === leastCommonBit);
    if (filtered.length === 1) {
        return filtered[0];
    }
    return getCO2Rating(filtered, idx+1);
}

const oxygenRate = getOxygenRating(bitSets).join('');
const CO2Rate = getCO2Rating(bitSets).join('');
const lifeSupportRate = parseInt(oxygenRate, 2) * parseInt(CO2Rate, 2);
    
console.log('part02 -> ', lifeSupportRate);