// array.js
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(num) {
  console.log('My number is ' + num);
});
// array.observable.js
var arr = Rx.Observable.from([1, 2, 3, 4, 5]);
arr.subscribe(function(num) {
  console.log('My number is ' + num);
});
// array.observable-interval.js
var arr = Rx.Observable.interval(500);
arr.subscribe(function(num) {
  console.log('My number is ' + num);
});
