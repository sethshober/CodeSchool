var fs = require("fs");

console.log("started");

var config = JSON.parse(fs.readFileSync("./config.json"));

console.log("Initial config: ", config);

// watch a file for changes and log the update
fs.watchFile("./config.json", function(current, previous){
	console.log("Config Changed");
	config = JSON.parse(fs.readFileSync("./config.json"))
	console.log("New config: ", config);
});