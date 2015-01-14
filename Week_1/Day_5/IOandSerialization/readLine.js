var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Let's do addition.");

rl.question("Number 1: ", function(answer1) {

	rl.question("Number 2: ", function(answer2) {

	    console.log("Number 1 plus Number 2 equals: " + ( Number(answer1) + Number(answer2) ) );

	    rl.close();

	});

});