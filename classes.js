/**
 * ES2015 - Classes
 * Syntactial sugar over JavaScript's existing prototype-based inheritance.
 */

'use strict';

class App {
  constructor() {
    console.log('hello');
  }
  method() {
    console.log('method called');
  }
}

var app = new App();
app.method();

// eq
function App1() {
  console.log('hello');
}
App1.prototype.method = function() {
  console.log('method called');
}

var app1 = new App1();
app1.method();
