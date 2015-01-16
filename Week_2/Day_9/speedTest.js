// TESTING VARIATIONS ON SPEED AND PERFORMANCE WITH TIME NODE


// RECURSIVE FIBONACCI
var fibonacci = function (n) {
	//console.log("real fibonacci called with " + n);
	if ( n > 1 ) {
		return fibonacci(n - 1) + fibonacci(n - 2); // this is where the math happens
	} else {
		return 1;
	}
};

var memoize = function(fn) { //assigns fibonacci as a variable, holding the DEFINITIONS of the function, not the return value
	var inputs = [];
	return function memoizedVersion(n) { //receives the user n first, then passes to fibonacci
		//console.log("memoized call with " + n);
		//console.log("saved values are " + inputs);
		if ( inputs[n] === undefined ) {
			inputs[n] = fn(n); //call fibonacci(), store the return value in inputs[n]
		}
		return inputs[n]; //return the fibonacci value
	}
}

fibonacci = memoize(fibonacci); // recursively assign fib to a memozized fib

//console.log( fibonacci(Number( process.argv[2] )) ); // get a number and print
fibonacci( Number( process.argv[2] ) );





//FUNCTION TO CALCULATE FIBONACCI NUMBERS
function fibonacciChart(n) {
	var valOne,
		valTwo,
		valAdd;
		fibArr = [];

	//loop 50 fibonacci number iterations
	for(var i = 0; i < n; i++){
		//arbitrarily add first #
		if(i === 0) {
			valOne = 0;
			valTwo = 1;
			//for testing
			//console.log(1);
			//add fibonacci number to array x,y coordinate
			fibArr.push([1,1]);
			continue;
		}
		//adjust variables up in sequence
		valAdd = valOne + valTwo;
		valOne = valTwo;
		valTwo = valAdd;
		//for testing
		//console.log(valAdd);
		//add fibonacci number to array as x,y coordinate
		fibArr.push([i, valAdd]);
	}
	//console.log(fibArr);
	return fibArr;
}

fibonacciChart(process.argv[2]);

