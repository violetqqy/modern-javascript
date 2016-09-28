/**
 * ES2015 - Spread Operator
 * Spread operators are conceptually the opposite of rest parameters.
 * Enable dynamtic expansion of an expression
 */

'use strict';

// let nums = [1, 2, 3];

// function addEverything(x, y, z) {
//   return x + y + z;
// }

// let val = addEverything(...nums);
// console.log(val);

//eq
var nums = [1, 2, 3];

function addEverything(x, y, z) {
  return x + y + z;
}

let val = addEverything.apply(this, nums);
console.log(val);
