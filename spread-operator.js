/**
 * ES2015 - Spread Operator
 * Spread operators are conceptually the opposite of rest parameters.
 * Enable dynamtic expansion of an expression
 */

'use strict';

let nums = [1, 2, 3];

function addEverything(x, y, z) {
  return x + y + z;
}

let val = addEverything(...nums);
console.log(val); // 6

//eq
function addEverything1(x, y, z) {
  return x + y + z;
}

let val1 = addEverything1.apply(this, nums);
console.log(val1); // 6
