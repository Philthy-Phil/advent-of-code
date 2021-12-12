"use strict";

const InputReader = require("../InputReader");
const ir = new InputReader(__dirname, "_input.txt");

let positions = ir
  .getRawData()
  .split(/[\n,]+/g)
  .filter(Boolean)
  .map((n) => Number(n));

function part1() {
  
  
  // console.log("part01 -> ", 0);
}

part1();