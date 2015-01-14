// calculate falling time
var fallingTime = function (meters) {

	//do math
	// 9.8 m/s/s

	var fallTime = Math.sqrt( (2*meters) / 9.8 );
	return fallTime;

};

// calculate an interest rate
var calculateInterest = function (rate, term, principal) {
	var rate = rate;
	if ( rate >= 1 ) { rate = rate/100; }
	var interest = principal * ( Math.exp( rate * term ) );
	return interest;
};

//add one to each item in arr
var people = function (arr) {
	for ( var i = 0; i < arr.length; i++ ) { arr[i]++; }
	return arr;
};

// make functions available
module.exports = {
	"fallingTime": fallingTime,
	"calculateInterest": calculateInterest,
	"people": people
};