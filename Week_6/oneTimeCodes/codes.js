var redis  = require('redis');
var client = redis.createClient();
var crypto = require('crypto');

client.on("error", function (err) {
    console.log(err);
});

client.on("ready", function (err) {
    console.log("Redis is ready.");
});


// creates random number
// @param format takes a string of format to convert to ( ex. hex, base64 )
// @param bytes is number of bytes
function createRandomNumber(bytes, format, callback) {
	crypto.randomBytes(bytes, function(err, buffer){
		if (err) { throw err; }
		var token = buffer.toString(format);
		console.log(token);
		callback(token);
	});
}


function saveItem(key, callback) {
	var value = createRandomNumber(24, 'hex', function(value){
		client.set(key, value, redis.print);
	});
	callback(key);
}


function getItem(key) {
	client.get(key, function (err, reply) {
		if (err) { console.log(err); }
        console.log(reply.toString()); // Will return value
    });
}

saveItem("testkey60", getItem);
//getItem("testkey50");


// for (var i = 10; i > 0; i --) {

// 	createRandomNumber(24, 'hex');
// 	createRandomNumber(24, 'base64');

// }