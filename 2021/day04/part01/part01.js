'use strict';

const InputReader = require('../InputReader');
const ir = new InputReader(__dirname, '_input.txt');

const input = ir.getRawData()
                    .split('\n\n')
                    .filter(line => Boolean(line))
                    .map(line => line
                        .trim()
                        .replace(/[\n ,]+/g, ' ')
                        .split(' ')
                        .map(l => parseInt(l))
                    );
                    
let [drawnNumbers, ...cards] = input;

class Card {
    constructor(numbers) {
        this.cardSize = 5;
        this.numbers = numbers;
        this.cardMap = new Map();
        for (let i = 0; i < this.numbers.length; i++) {
            const n = this.numbers[i];
            this.cardMap.set(n, {
                line: Math.floor(i / this.cardSize),
                column: i % this.cardSize
            });
        }
        this.lines = Array(this.cardSize).fill(0);
        this.columns = Array(this.cardSize).fill(0);
        this.isComplete = false;
    }

    addMarkedNumber(number) {
        const pos = this.cardMap.get(number);
        if (!pos) {
            return;
        }
        this.lines[pos.line]++;
        this.columns[pos.column]++;
        if (this.lines[pos.line] === this.cardSize || this.columns[pos.column] === this.cardSize) {
            this.isComplete = true;
        }
    }

    showMap() {
        for (const i of this.cardMap) {
            console.log(i, this.cardMap.get(i));
        }
    }
}

cards = cards.map(nums => new Card(nums));

let winningCard;
const actuallyDrawn = [];
for (const drawn of drawnNumbers) {
    let finished = false;
    actuallyDrawn.push(drawn);
    for (const card of cards) {   
        card.addMarkedNumber(drawn);
        if (card.isComplete) {
            finished = true;
            winningCard = card;
            break;
        }
    }
    if (finished) {
        break;
    }
}

const unmarkedNumbers = winningCard.numbers.filter(n => !actuallyDrawn.includes(n));
const finalScore = unmarkedNumbers.reduce((a, b) => a + b, 0) * actuallyDrawn.slice(-1);
        

console.log('part01 -> ', finalScore);

