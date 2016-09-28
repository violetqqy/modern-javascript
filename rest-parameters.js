/**
 * ES2015 - Rest Parameters
 * If the last named argument is prefixed with ... 
 * the argument collects itself and all consecutive arguments
 */

'use strict';

printArguments(1, 2, 3);

function printArguments(...arges) {
  arges.forEach(function(arg) {
    console.log('rest arges:', arg);
  })
}

// eq
printArguments1(1, 2, 3);

function printArguments1() {
  let arges = [].slice.call(arguments, 0);
  arges.forEach(function(arg) {
    console.log('rest arges:', arg);
  })
}

printObjects('hello', { name: 'PatrickJS' }, { name: 'Scott' }, { name: 'Mike' });

function printObjects(prefix, ...arges) {
  // let arges = [].slice.call(arguments, 0);
  arges.forEach(function(arg) {
    // console.log('argument', arg);
    console.log(prefix, arg);
  })
}
