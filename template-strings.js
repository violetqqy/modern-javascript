/**
 * ES2015 - Template Strings
 * Template Strings are using the back tick symbol for multi-line strings and string interpolation
 */

'use strict';

var myData = {
  data: 'hello'
}
var template = `
  <div>
    ${myData.data}
  </div>
`
console.log(template);

// eq
var myData1 = {
  data: 'hello'
}
var template1 = '  ' +
  '<div>' + '\n    ' +
  myData1.data + '\n  ' +
  '</div>' +
  '';
console.log(template1);
