/**
 * ES2015 - Arrow Functions
 * New syntax for maintaining the parent object scope in callback functions.
 */

'use strict';

let object = {
  collection: ['patrick', 'scott', 'mike'],
  domain: 'angularclass.com',
  method: function() {
    return this.collection.map(item => {
      return `${item}@${this.domain}`
    })
  }
}
console.log(object.method());

// eq
var object1 = {
  collection: ['patrick', 'scott', 'mike'],
  domain: 'angularclass.com',
  method: function method() {
    var _this = this;
    return this.collection.map(function(item) {
      return item + '@' + _this.domain;
    })
  }
}
console.log(object1.method());

var object2 = {
  collection: ['patrick', 'scott', 'mike'],
  domain: 'angularclass.com',
  method: function method() {
    var mapEmail = function(item) {
      return item + '@' + this.domain;
    }.bind(this);
    return this.collection.map(mapEmail);
  }
}
console.log(object2.method());
