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
        this.markedNumbers = new Set();
    }

    addMarkedNumber(number) {
        const pos = this.cardMap.get(number);
        if (!pos) {
            return;
        }
        this.markedNumbers.add(number);
        this.lines[pos.line]++;
        this.columns[pos.column]++;
        if (this.lines[pos.line] === this.cardSize || this.columns[pos.column] === this.cardSize) {
            this.isComplete = true;
        }
    }

    unmarkedNumbers() {
        return this.numbers.filter(n => !this.markedNumbers.has(n));
    }
}

function part2(_cards) {
    let cards = _cards.map(nums => new Card(nums));
    let lastWinningCard;
    let lastWinningNumber;
    const actuallyDrawn = [];
    for (const drawn of drawnNumbers) {
        actuallyDrawn.push(drawn);
        let hasIncompleteCards = false;
        for (const card of cards) {
            if (!card.isComplete) {
                hasIncompleteCards = true;
                card.addMarkedNumber(drawn);
                if (card.isComplete) {
                    lastWinningCard = card;
                    lastWinningNumber = drawn;
                }
            }
        }
        if (!hasIncompleteCards) {
            break;
        }
    }

    const unmarkedNumbers = lastWinningCard.unmarkedNumbers();
    const finalScore = unmarkedNumbers.reduce((a, b) => a + b, 0) * lastWinningNumber;

    console.log('part02 -> ', finalScore);
}

part2(cards);