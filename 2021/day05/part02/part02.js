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
        this.points = [];

        const possibleCoordsForX = this.createPossiblePointCoords(this.from.x, this.to.x);
        const possibleCoordsForY = this.createPossiblePointCoords(this.from.y, this.to.y);

        if (possibleCoordsForX.length > 0 && possibleCoordsForY.length === 0) {
            for (const coord of possibleCoordsForX) {
                let segment = coord + ',' + this.from.y;
                this.points.push(new Point(segment));
            }
        }

        if (possibleCoordsForY.length > 0 && possibleCoordsForX.length === 0) {
            for (const coord of possibleCoordsForY) {
                let segment = this.from.x  + ',' + coord;
                this.points.push(new Point(segment));
            }
        }

        if (possibleCoordsForX.length > 0 && possibleCoordsForY.length > 0) {
            for (let i = 0; i < possibleCoordsForX.length; i++) {
                let segment = possibleCoordsForX[i] + ',' + possibleCoordsForY[i]
                this.points.push(new Point(segment));
            }
        }
    }
    
    createPossiblePointCoords(a, b) {
        let coordsFor = [];
        if (a > b) {
            while (a >= b) {
                coordsFor.push(a);
                if (a === b) {
                    break;
                } else {
                    a--;
                }
            }
        }
        if (a < b) {
            while (a <= b) {
                coordsFor.push(a);
                if (a === b) {
                    break;
                } else {
                    a++;
                }
            }
        }
        return coordsFor;
    }
}

class Point {
    constructor(segment) {
        const [x, y] = segment.split(',');
        this.x = parseInt(x);
        this.y = parseInt(y);
    }
}


function checkForOverlappingPoints(board) {
    let overlappingPoints = 0;
    for (let i = 0; i <= board[0].length-1; i++) {
        for (let j = 0; j <= board.length-1; j++) {
            if (board[i][j] >= 2) {
                overlappingPoints++;
            }
        }
    }
    return overlappingPoints;
}


function part2(){

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

    let board = Array(maxY+1).fill(0).map(x => Array(maxX+1).fill(0));
    
    // console.log(lines[0])

    lines.forEach(line => {
        line.points.forEach(point => {
            for (let i = 0; i <= maxY; i++) {
                for (let j = 0; j <= maxX; j++) {  
                    if (point.x === j && point.y === i) {
                        board[i][j] += 1;
                    }              
                }
            }
        });                
    });
    
    let overlappingPoints = checkForOverlappingPoints(board);
    console.log('part02 -> ', overlappingPoints);
}

part2();