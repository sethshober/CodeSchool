var fs = require("fs");
var config = JSON.parse( fs.readFileSync("config.json") );
var host = config.host;
var port = config.port;
var express = require("express");

var app = express();

app.get("/", function (request, response) {
	response.send("hello!");
});

app.get("/hello/:text", function (request, response) {
	response.send("Hello " + request.params.text);
});

var users = {
	"1": {
		"name": "Seth",
		"title": "the boss"
	},
	"2": {
		"name": "Bret",
		"title": "Mad Scientist"
	}
};

app.get("/user/:id", function(request, response){
	var user = users[request.params.id];
	if (user) {
		response.send(user);
	} else {
		response.send("Sorry, user not found.", 404);
	}
});

app.listen(port, host);