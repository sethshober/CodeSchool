#!/usr/bin/env node

// take files and print to console

var fs = require('fs');
var args = process.argv.slice(2);

function showFileContents (fileArr) {

	for ( var i = 0; i < fileArr.length; i++ ) {

		fs.readFile(fileArr[i], { encoding: 'utf8' }, function(error, contents) {
			if (error) console.error(error.message);
	  		console.log(contents);
		});

	}
}

showFileContents(args);