'use strict';

const { brotliDecompress } = require('zlib');
const InputReader = require('../InputReader');
const ir = new InputReader(__dirname, '_input.txt');

const input = ir.getRawData()
                .split(/[\n,]+/g)
                .filter(Boolean)
                .map(n => Number(n));
                
             

function part1(){


    console.log(input);


    console.log('part01 -> ', 0);
}

part1();