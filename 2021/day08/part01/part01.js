"use strict";

const InputReader = require("../InputReader");
const ir = new InputReader(__dirname, "_input.txt");

let positions = ir
  .getRawData()
  .split(/[\n,]+/g)
  .filter(Boolean)
  .map((n) => Number(n));

function part1() {
  let fuel = 0;
  let fuelSums = [];

  for (let i = 0; i < positions.length; i++) {
    let toPos = i;
    let fuelSum = 0;
    positions.forEach((pos) => {
      fuelSum += Math.abs(pos - toPos);
    });
    fuelSums.push(fuelSum);
  }

  let cheapestFuel = Math.min(...fuelSums);
  console.log("part01 -> ", cheapestFuel);
}

part1();