//
// @file app.js
//

var funcs = require('./array-functions.js');
var fruits = ['kiwi', 'strawberry', 'banana', 'blueberry'];

// THESE THREE FUNCTIONS ACCOMPLISH THE SAME THING
fruits.forEach(funcs.sayFruits);

for ( var i = 0; i < fruits.length; i++ ) {
	funcs.sayFruits(fruits[i]);
}

fruits.map(funcs.mapFunc);
// =======================

fruits.map(funcs.pluralize);
//=> ['dogs', 'cats']

// funcs.people(fruits, function(object, index) {
//   console.log('The ' + object + ' is at index ' + index);
// });

function callback (object, index, array) {
	console.log('The ' + object + ' is at index ' + index);
}


fruits.forEach(callback);

function print(){
	console.log(fruits[i]);
}

//funcs.each(fruits, print);