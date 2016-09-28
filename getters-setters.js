/**
 * ES5 - Getters / Setters
 * Getters and setters are psudo-properties that return or set a dynamically computed value.
 */

'use strict';

var obj1 = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set b(x) {
    this.a = x / 2;
  }
};
console.log(obj1.a); // 7
console.log(obj1.b); // 8
obj1.b = 50;
console.log(obj1.a); // 25

var obj = {
  firstName: 'Mike',
  lastName: 'Adams',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(value) {
    var fullNameArray = value.split(' ');
    this.firstName = fullNameArray[0];
    this.lastName = fullNameArray[1];
  }
}
console.log(obj.fullName); // Mike Adams
obj.fullName = "Scott Moss";
console.log(obj.firstName); // Scott
console.log(obj.lastName); // Moss
