"use strict";

const InputReader = require("../InputReader");
const ir = new InputReader(__dirname, "_input.txt");

let _input = ir
  .getRawData()
  .split('\r\n\r\n')
  .filter(Boolean)
  .map(lines => {
    const [template, ...pairs] = lines.split('\n')
    pairs.splice(0, 1)
    return { template, pairs };
  });

function findFrequent(arr) {

  let uniques = new Set(arr);
  let charsMap = new Map();
  
  for (const char of uniques) {
    charsMap.set(char, 0);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let [key, value] of charsMap) { 
        if (arr[i] === key) {
          value++;
          charsMap.set(key, value);
        }
    }
  }

  const charsMapSort = new Map([...charsMap.entries()].sort((a, b) => a[1] - b[1]));
  const leastFrequent = [...charsMapSort][0][1]
  const mostFrequent = [...charsMapSort][[...charsMapSort].length - 1][1]

  return [leastFrequent, mostFrequent];
}

function part2(input) {

  let startTemplate = input[0].template.split('');
  let newArr = [startTemplate[0]];
  let count = 0;

  while(count < 40) {
    for (let i = 0; i < startTemplate.length; i++) {
      for (const pairs of input[0].pairs) {
        let [combiChars, insertChar] = pairs.split(' -> ')
        if ((startTemplate[i] + startTemplate[i+1]) === combiChars) {
          newArr.push(insertChar, startTemplate[i + 1])
        }
      }
    }
    startTemplate = [...newArr];
    newArr = [startTemplate[0]];
    count++;
  }

  const [leastFrequent, mostFrequent] = findFrequent(startTemplate);
  const result = mostFrequent - leastFrequent;

  console.log("part02 -> ", result);
}

part2(_input);