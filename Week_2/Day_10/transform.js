// We created a 'transform' function as a method to the Array prototype. It takes an array and returns an array of values determined by typeof parameter.
// Function will iterate over array that method is run on and return a new array with values matching the typeof value you passed as a parameter.
// argument 'type' takes a typeof of parameter that you want for returned values. 'strict' is optional and is true or false.
// If 'strict' is true, passing 'object' as typeof will return only objects minus arrays. Where as false will return objects and arrays by passing 'object'. The 'strict' argument is optional and will default to false.
// Example: transformArray.myTransformFunction('string') will return a new array with all strings in transformArray.

var transformArray = [ [1,2,3,4,5], 100, "world", {name: "Seth", home: "Portland"}, "hello", 50, undefined, null, true, false, ["values", "more values"], { key:"value" } ];
Array.prototype.myTransformFunction = function(type, strict){

	var newArr = [];
	this.filter(function(item){
		if ( type === "array" && Array.isArray(item)) { newArr.push(item); }	

		if ( type === "object" && strict ) {

			if ( typeof item === type && ! Array.isArray(item) ) { newArr.push(item); }
	
		} else if ( typeof item === type ) { newArr.push(item); }
	
	});

	console.log(newArr);
	return newArr;
};


// transformArray.myTransformFunction("object", true);
// transformArray.myTransformFunction("array");
// transformArray.myTransformFunction("string");
// transformArray.myTransformFunction("number");
// transformArray.myTransformFunction("undefined");
// transformArray.myTransformFunction("null");
// transformArray.myTransformFunction("boolean");



// module.exports = {
// 	myTransformFunction: Array.myTransformFunction
// }



















