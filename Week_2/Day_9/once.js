// USING ONCE...THIS WILL ALLOW A FUNCTION TO BE CALLED ONLY ONCE
function once(fn) { 
	var result;
	console.log(arguments);
	return function() { 
		if(fn) {
			result = fn.apply(this, arguments);
			fn = null;
		}

		return result;
	};
}

function runOnce () {
	console.log("I have been called.");
}

// Usage
var canOnlyFireOnce = once(runOnce);

canOnlyFireOnce(); // "Fired!"
canOnlyFireOnce(); // nothing to