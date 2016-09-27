/**
 * ES5 - Object.keys
 * Converting the keys of an object to an array.
 */

'use strict';

var dictionary = {
  yolo: "what you say before doing something crazy",
  gg: "good game, also used sarcastically when you win",
  swag: "swag swag"
}
var keys = Object.keys(dictionary);
console.log(keys); // [ 'yolo', 'gg', 'swag' ]
var upperKeys = keys.map(function(key) {
  return key.toUpperCase();
})
console.log(upperKeys); // [ 'YOLO', 'GG', 'SWAG' ]

var obj = {
  one: 1,
  two: 2,
  three: 3
}
var keys2 = Object.keys(obj);
console.log(keys2); // [ 'one', 'two', 'three' ]
var timesTwo = keys2.map(function(key) {
  return obj[key] * 2;
})
console.log(timesTwo); // [ 2, 4, 6 ]
