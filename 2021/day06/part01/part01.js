'use strict';

const InputReader = require('../InputReader');
const ir = new InputReader(__dirname, '_input.txt');

let fishes = ir.getRawData()
                .split(/[\n,]+/g)
                .filter(Boolean)
                .map(n => Number(n));
                
function part1(){

    let days = 1;
    let dDay = 80;

    // console.log('initial state -> ', fishes);

    while (days <= dDay) {
        for (let i = 0; i < fishes.length; i++) {
            if (fishes[i] === 0) {
                fishes[i] = 6;
                fishes.push(8+1);
            } else {
                fishes[i] = fishes[i] - 1;
            }
        }  
        // if (days < 2) {
        //     console.log('After ' + days + ' day -> ' + fishes);
        // } else {
        //     console.log('After ' + days + ' days -> ' + fishes);
        // }
        // if (days === dDay) {
        //     console.log('After ' + days + ' days -> ' + fishes);
        // }
        days++;
    }
    let fishCount = fishes.length;
    console.log('part01 -> ', fishCount);
}

part1();