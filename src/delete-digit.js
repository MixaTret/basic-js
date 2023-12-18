const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = String(n);
  let maxResult = 0;

  for (let i = 0; i < numStr.length; i++) {
    const currentNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));
    maxResult = Math.max(maxResult, currentNum);
  }
  return maxResult;
}

module.exports = {
  deleteDigit
};
/* const n = 152;
const arrayOfDigits = Array.from(String(n), Number);
const minimum = Math.min(...arrayOfDigits);
const newArray = [];
for (const item of arrayOfDigits) {
  if (item > minimum) {
    newArray.push(item);
  }
  console.log(newArray)

}
return +newArray.join(''); */
