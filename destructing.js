/**
 * ES2014 - Destructuring
 * Destructuring is a way to pluck properties off of a data structure
 * and assign them to distinct variables
 */

'use strict';

var obj = {
  a: 1,
  b: 2
}
var data = { a, b };
data = obj;
console.log(a, b);

// eq
var obj1 = {
  a: 1,
  b: 2
}
var a = obj1.a;
var b = obj1.b;
console.log(a, b);


var prism = {
  l: 5,
  w: 8
}

function rectPrismArea(obj = { l, w, h = 10 }) {
  return obj.l * obj.w * obj.h;
}

console.log(rectPrismArea(prism));
