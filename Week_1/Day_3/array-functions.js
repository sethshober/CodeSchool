//
//	@file array-functions.js
//

function each (arr, func) {
		for ( var i = 0; i < arr.length; i++ ) { 
		func();
	}
	return arr;
}

//add one to each item in arr
var addOne = function (arr) {
	for ( var i = 0; i < arr.length; i++ ) { 
		arr[i]++;
	}
	return arr;
};


var sayHello = function () {
	console.log("Hello World!");
};

// log each element
function sayFruits(element, index, array) {
  console.log(element);
}

// log each element
function mapFunc (element, index, array) {
	console.log(element);
}

// make all words plural (simple logic)
var pluralize = function(word) {
  console.log( word + 's' );
}

module.exports = {
	version: "0.0.1",
	each: each,
	addOne: addOne,
	sayFruits: sayFruits,
	mapFunc: mapFunc,
	pluralize: pluralize
};