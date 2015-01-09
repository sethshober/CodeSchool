var fns = require("../test.js");

var currentDay = 5;

describe("setReminder", function(){
	it("should tell you whether you have an appointment today", function () {
		expect(fns.setReminder(currentDay)).toEqual("You have an appointment.");
	});
});
