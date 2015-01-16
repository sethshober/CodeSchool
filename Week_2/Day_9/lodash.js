var _ = require('lodash');

console.log(_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }));
// → { 'a': 1, 'b': 2, 'c': 3 }
console.log(_.map([1, 2, 3], function(n) { return n * 3; }));
// → [3, 6, 9]


//PARTIAl
var greet = function(greeting, name) { return greeting + ' ' + name; };
var hi = _.partial(greet, 'hi'); // == greet('hi', 'fred')
hi('fred'); //=> 'hi fred'


//CURRY
var greet = function(greeting, name) { return greeting + ' ' + name; };
var hi = _.curry(greet)('hi');
hi('fred'); //=> 'hi fred'


// FILTER
var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = _.filter(numbers, function(n) { return (n % 2) === 0; });






// FILTER or (fold)

var numbers = [1, 2, 3, 4, 5, 6];
var sum = 0;
numbers.forEach(function(n) {
  sum += n;
});
sum; //=> 21

var strings = ['hello', ' ', 'world'];
var result = '';
strings.forEach(function(s) {
  result += s;
});
result; //=> 'hello world'


var arrays = [[10], ['string'], [{}]];
var result = [];
arrays.forEach(function(a) {
  result = result.concat(a);
});
result; //=> [10, 'string', {}]


// above equals below

var numbers = [1, 2, 3, 4, 5, 6];
var sum = _.reduce(numbers, function(sum, n) { console.log(sum + n) }, 0);

var strings = ['hello', ' ', 'world'];
var string = _.reduce(strings, function(concatenated, s) { return concatenated + s; }, '');

// var arrays = [[10], ['string'], [{}]];
// var array = _.reduce(arrays, function(concatenated, a) {  console.log( concatenated.concat(a) ); }, []);

numbers.reduce(function(sum, n) {
	console.log( sum + n );
}, 0);







//LODASH
var pairs = [['name', 'JSI'], ['location', { city: 'Portland', 'state': 'OR' }], ['school', 'PCS']];
var newObj = _.reduce(pairs, function () {

	var obj = {};
	
	for ( var i = 0; i < pairs.length; i++ ) {

		obj[pairs[i][0]] = pairs[i][1];

	}

	return obj;

});

console.log(newObj);
//=> { name: 'JSI', location: { city: 'Portland', state: 'OR' }, school: 'PCS' }



// OR



//NATIVELY
var natively = pairs.reduce(function(){
	var obj = {};
	
	for ( var i = 0; i < pairs.length; i++ ) {

		obj[pairs[i][0]] = pairs[i][1]; //iterate through array and populate key value pairs from items in array to new object

	}

	return obj;
});

console.log(natively);


























