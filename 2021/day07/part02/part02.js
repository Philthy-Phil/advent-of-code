"use strict";

const InputReader = require("../InputReader");
const ir = new InputReader(__dirname, "_input.txt");

let positions = ir
  .getRawData()
  .split(/[\n,]+/g)
  .filter(Boolean)
  .map((n) => Number(n));

function part2() {

  let fuelSums = [];

  for (let n = 0; n < positions.length; n++) {
    let toPos = n;
    let fuelSum = 0;
    
    positions.forEach((pos) => {
      let diffFuelSum = Math.abs(pos - toPos);
      let extraFuel = 0;
      
      for (let i = 1; i < diffFuelSum; i++) {
        extraFuel += i;
      }
      
      fuelSum += diffFuelSum + extraFuel;
    
    });
    
    fuelSums.push(fuelSum);
  }

  // console.log(fuelSums);
  let cheapestFuel = Math.min(...fuelSums);
  console.log("part02 -> ", cheapestFuel);

}

part2();