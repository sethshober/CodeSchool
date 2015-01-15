// immediately invoked function
var greet = (function() {
  var greeting = "Hello, ";

  return function(personName) {
    console.log(greeting + personName);
  };
})();

greet('Seth');




// watchg out for scoping issues in loops. variables are global and cause problems. 

// original that doesn't work. logs undefined. array[i] is the issue.
// var array = ["hello", "world"];
// var callbacks = [];
// for (var i = 0; i < array.length; i++) {
//   callbacks.push(function() {
//     console.log(array[i]);
//   });
// }
// callbacks.forEach(function(c) { c(); });


// refactored and working version
var array = ["hello", "world"];
var callbacks = [];
var addCallback = function(index) {
	callbacks.push(function () {
	  console.log(array[index]);
	})  
  };

for ( var i = 0; i < array.length; i++ ) { addCallback(i); }

callbacks.forEach(function(func) { func(); });
