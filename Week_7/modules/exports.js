var name = "Seth";
var timeOfDay = "morning";

exports.hello = function () {
	return "Hello " + name + ".";
}

exports.greeting = function() {
	return "Good " + timeOfDay + ".";
}

function private() {
	return "I am private.";
}