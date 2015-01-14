var name = "Bryce";
var bottlesOfBeer;

console.log(name);


	
for (bottlesOfBeer = 99; bottlesOfBeer > 1; bottlesOfBeer-- ) {
    
    singAboutBottles();

}

console.log("1 bottle of beer on the wall, 1 bottle of beer, take one down, pass it around, no more bottles of beer on the wall!");


//console.log(singAboutBottles(bottlesOfBeer));


function singAboutBottles() {
	console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of ber, take one down, pass it around, " + (bottlesOfBeer - 1) + "bottles of beer on the wall!");
}

var Bryce = {

			firstName: "Bryce",
			lastName: "Johnson",
			age: 31

			};

console.log(Bryce);

var authors = [
  "Margaret Atwood",
  "Jane Austen",
  "Bill Bryson",
  "Roald Dahl",
  "Tom Holt",
  "Terry Pratchett",
  "J.K. Rowling"
];

authors.forEach(function(author){
	console.log(author);
});

// ========= OR ==========

for ( var i = 0; i < authors.length; i ++ ) {
	console.log(authors[i]);
}

function isTeacher(name) {
  if (name === "Dan" || name === "Andrew") {
    return true;
  } else { return false; }
}

console.log( isTeacher("me") );
console.log( isTeacher("Andrew") );
console.log( isTeacher("Dan") );




function ternaryIsTeacher(name) {
	return name === "Dan" || name === "Andrew" ? true : false;
}

console.log( ternaryIsTeacher("me") );
console.log( ternaryIsTeacher("Andrew") );
console.log( ternaryIsTeacher("Dan") );


function introduce(name1, name2) {
	return name1 + " met " + name2 + " and said the color green is awesome.";
}

console.log( introduce("John", "Sara") );

function sum(num1, num2) {
	var sum = num1 + num2;
	return "The sum of " + num1 + " and " + num2 + " is " + sum + ".";
}


function difference(num1, num2) {

		var difference = Math.abs(num1, num2);
		return "The difference between " + num1 + " and " + num2 + " is " + difference + ".";
	
}

console.log( difference(5,10) );
