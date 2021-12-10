'use strict';

const { brotliDecompress } = require('zlib');
const InputReader = require('../InputReader');
const ir = new InputReader(__dirname, '_input.txt');

const input = ir.getRawData()
                .split('\n')
                .filter(Boolean)
                .map(line => {
                    const [from, to] = line.split(' -> ')
                    return {from, to};
                });
                
                        
class Line {
    constructor(segment) {
        this.from = new Point(segment.from);
        this.to = new Point(segment.to);
    }
}
class Point {
    constructor(segment) {
        const [x, y] = segment.split(',');
        this.x = parseInt(x);
        this.y = parseInt(y);
    }
}


function part1(){


    const lines = input.map(segment => new Line(segment));

    let maxX = 0;
    let maxY = 0;
    lines.forEach(line => {
        if (line.from.x > maxX) {
            maxX = line.from.x;   
        }
        if (line.from.y > maxY) {
            maxY = line.from.y;   
        }
        if (line.to.x > maxX) {
            maxX = line.to.x;   
        }
        if (line.to.y > maxY) {
            maxY = line.to.y;   
        }
    });
    console.log(lines)

    // console.log('maxX', parseInt(maxX))
    // console.log('maxY', parseInt(maxY))

    let board = Array(maxY+1).fill(0).map(x => Array(maxX+1).fill(0));

    // board[0][0] = 'X'
    // board[maxY-1][maxX-1] = 'X'

        lines[0].from.x
         
        // board[0][0] = 'A';
        // board[8][0] = 'A';
        
        // TODO
        for (let i = 0; i <= maxY; i++) {
            for (let j = 0; j <= maxX; j++) {  
                
                if (lines[0].from.x === j && lines[0].from.y === i) {
                    board[i][j] = 'A';
                } 

            }
        }

    console.log(board);

}

part1();