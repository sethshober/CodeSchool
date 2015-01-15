// write a function that generates the next number each time it's called
// sequence(); => 0
// sequence(); => 1
// sequence(); => 2

/**
 * Represents a counter
 * @function
 * @param {string} title - The title of the book.
 */
function counter () {
	//set count
	var count = 0;

	// manage individual counters
	function sequence () {
		// add one to matching counter
		console.log(count);
		count++;
	}

	// reset counter to num specified or zero if blank 
	function reset (num) {
		if ( num === undefined ) { count = 0; }
		else { count = num; }
		console.log(count);
	}

	// must return function in order to call sequence variable as function
	return {
		"next": sequence,
		"reset": reset
	}
}


var sequence1 = counter();
var sequence2 = counter();
sequence1.next(); //=> 0
sequence1.next(); //=> 1
sequence2.next(); //=> 0
sequence1.next(); //=> 2
sequence1.reset(); //=> void
sequence1.next(); //=> 0
sequence2.next(); //=> 1
sequence1.reset(5); //=> void
sequence1.next(); //=> 5
console.log(sequence1.reset());
console.log(sequence2.reset());






//recursive counter
// function counter (start, stop) {
// 	while ( start <= stop ) {
// 		var y = x;
// 		console.log(y);
// 		x++;
// 		start++;
// 		counter();
// 	}
// }