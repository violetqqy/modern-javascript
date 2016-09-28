var $ = document.querySelector.bind(document);
var myInput = $('input');
var obs = Rx.Observable.fromEvent(myInput, 'input');
obs.subscribe(function(event) {
  console.log(event.target.value);
});

// var $ = document.querySelector.bind(document);
// var myInput = $('input');
// var obs = Rx.Observable.fromEvent(myInput, 'input');
// obs
//   .debounceTime(200)
//   .map(function(event) {
//     return event.target.value;
//   })
//   .subscribe(function(value) {
//     console.log(value);
//   });
