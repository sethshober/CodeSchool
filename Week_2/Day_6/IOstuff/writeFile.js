var fs = require("fs");

console.log("starting");
//write to file synchronously. will create file if it doens't exist.
fs.writeFileSync("./writeSync.txt", "Hello World! synchronous");
console.log("finished");


console.log("starting");
//write to file async. will create file if it doens't exist.
fs.writeFile("./writeAsync.txt", "Hello World! async", function (error) {
	console.log("Written file");
});
console.log("finished");