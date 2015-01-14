var fs = require("fs");

console.log("Starting");

//read async
fs.readFile("./file1.txt", function (error, data) {
	console.log("Contents: " + data);
});

console.log("Carry on executing.");

console.log("Starting");

//read sync
var content = fs.readFileSync("./file1.txt");
console.log("Contents: " + content);
console.log("Carry on executing.");

//read config
var contents = fs.readFileSync("./config.json");
console.log(contents);

//make JSON
var config = JSON.parse(contents);
console.log(config);
console.log(config.first);