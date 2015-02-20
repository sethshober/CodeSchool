var http      = require('http');
var fs        = require('fs');

function stream (readFile, writeFile) {
	var read = fs.createReadStream(readFile);
	var write = fs.createWriteStream(writeFile);
	read.pipe(write);
}

stream("./readFile.txt", "./writeFile.txt");

