var crypto = require('crypto');
var string = process.argv[2];
//var salt = process.argv[2];
//var pass = process.argv[3];
//var salt = createSalt();

var user = {
	string: "hello",
	salt: "grass",
	pass: "8305751e71159f60f2d0c5af7f3e036fc5e2788896b969f45b64656fcea319a9"
};
var saltedPass = user.salt + string;


if ( createHash(saltedPass, 'sha256', 'hex') === user.pass ) { console.log("match"); }
else { console.log("no match"); }


// create a hash ex. createHash('saltedpassword', 'sha256', 'hex')
function createHash(pass, type, encoding) {
	var hash = crypto.createHash(type);
	hash.update(pass);
	var passHash = hash.digest(encoding);
	console.log("pass: " + passHash);
	return passHash;
};

// create a secure random 32 byte (256 bit) hex string
function createSalt() {
	crypto.randomBytes(32, function (ex, buf) {
		if (ex) throw ex;
		var salt = buf.toString('hex');
		console.log(salt);
		return salt;
	});
}

var newSalt = createSalt();
var newString = "newString";
var newPass = newSalt + newString;
createHash(newPass, 'sha256', 'hex');


// var salt = createSalt();
// var hashedPass = createHash(pass, 'sha256', 'hex');
// var combined = salt + hashedPass;
// console.log("final: " + combined);






// var	pass = "hello";
// var	salt = crypto.randomBytes(128).toString('base64');


// //console.log(salt);

// crypto.pbkdf2(pass,salt, 10000, 512, 'sha256', function (err, key) {
// 	if (err) { throw err; }
// 	console.log(key.toString('hex'));
// });