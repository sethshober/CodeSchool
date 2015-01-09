// prep work
// make the cake batter
var frosting = mix(['sugar', 'butter', 'cocoa powder']);
var batter = mix(['flour', 'eggs', 'butter']);
var pan = {
  type: 'pan',
  diameter: '9in',
  shape: 'round'
};
var cake = pour(pan, batter);
var frosting = null;


function preheat (temp) {
	//makes the oven a certain temperature
	console.log("Preheat oven to %s", temp);
}

function addItem (item) {
	//puts item into the oven
	console.log("I put %s in the oven", item);
}

function removeItem () {
	//take item out of the oven
	console.log("Take item out of oven now.");
}

function pour () {
	console.log("You poured the batter.");
}

function decorate () {
	console.log("You have created a delectible cake.");
}


function mix (arr) {
	console.log("You mixed " + arr.join(", "));
}

// count down timer in seconds
function runTimer(t) {

	//t = console.prompt("How many seconds will you be baking?");
	var t = t;

	var countDownTimer = setInterval(function () { 


		if ( t > 0 ) { // we have a time

			//var h = Math.floor(t / 3600); // local variable h, determine the total remaining hours
			//var m = Math.floor(t % 3600 / 60); // local variable m, determine the total remaining minutes
			var s = Math.floor(t % 3600 % 60); // local variable s, determine the total remaining seconds

		}

		if ( t === 0 ) {

			clearInterval(countDownTimer); // stop the interval defined in the global variable countdownTime
			console.log("done");
			removeItem();
			decorate();

		} else {
			
			t--;
			console.log(t);

		}


	}, 1000);


}



function bakeCake () {

	preheat("350 deg");

	addItem("mixing");
	
	runTimer(5);

}


module.exports = {
	bakeCake: bakeCake
};