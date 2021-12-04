'use strict';

const fs = require('fs');
const path = require('path');

class InputReader {

    constructor(__dirname, filename) {
        this.__dirname = __dirname;
        this.filename = filename;
    }

    getPath() {
        return this.__dirname;
    }

    getFilename() {
        return this.filename;
    }

    getDataSplitByLine() {
        return fs
                .readFileSync(path.join(this.__dirname, this.filename), { encoding: 'utf8' })
                .toString()
                .trim()
                .split('\n');
    }
}

module.exports = InputReader;