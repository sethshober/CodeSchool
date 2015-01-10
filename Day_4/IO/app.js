#!/usr/bin/env node

// take files and print to console

var fs = require('fs');
var args = process.argv.slice(2);

function showFileContents (fileArr) {

	function time (name) {
	  var start = Date.now();
	  return function() {
	    console.log('time %s: %dms', name, Date.now() - start);
	  };
	};

	var done = time('reading file');

	for ( var i = 0; i < fileArr.length; i++ ) {

		fs.readFile(fileArr[i], { encoding: 'utf8' }, function(error, contents) {
			if (error) console.error(error.message);
	  		console.log(contents);
	  		done();
		});

	}
}

showFileContents(args);