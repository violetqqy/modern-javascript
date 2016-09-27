/**
 * ES2015 - Var, Let & Const
 * ES5 Var is not block scoped can have unexpected behavior.
 * Let & Const are block scoped to fix this.
 */

'use strict';

var str = 'hi';
if(true) {
  var str = 'bye';
}
console.log(str);

let str1 = 'hi';
if(true) {
  let str1 = 'bye';
}
console.log(str1);

const str2 = 'hi';
if(true) {
  str2 = 'bye';
}
console.log(str2);

var day = 'today';
if(true) {
  var day = 'tommorrow';
}
console.log(day);
// eq
// var day = undefined;
// day = 'today';
// if(true) {
//   day = 'tommorrow';
// }
// console.log(day);


