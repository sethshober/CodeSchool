var http = require('http');
var fs   = require('fs');
var port = process.env.PORT || 3000;
var index = fs.readFileSync('public/index.html');

http.createServer(function (req, res) {
	res.writeHead( 200, { 'Content-Type': 'text/html' } );
	res.end(index);
}).listen(port);