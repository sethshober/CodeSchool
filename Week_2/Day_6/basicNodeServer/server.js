var http = require("http");
var fs = require("fs");
console.log("starting");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var server = http.createServer(function(request, response){
	//show request
	console.log("Received request: " + request.url);
	//set headers
	response.writeHead(200, {"Content-type":"text/plain"});
	//send response
	response.end("Hello World!");
})

server.listen(port, host, function () {
	console.log("Listening " + host + ":" + port);
});

// watch config file for changes so you can monitor and allow for port changes
fs.watchFile("config.json", function(){
	// file has changed...update settings
	config = JSON.parse(fs.readFileSync("config.json"));
	host = config.host;
	port = config.port;
	// stop server
	server.close();
	// start on new config settings
	server.listen(port, host, function () {
	console.log("Now listening " + host + ":" + port);
	});
});