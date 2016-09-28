/**
 * ES2015 - Enhanced Object Literals
 * Syntactical sugar for dynamic property generation in object literals.
 */

'use strict';

var obj = {
  handler: function() {},
  ['prop_' + 42]: 'life'
}
console.log(obj.prop_42);
