var fns = require('../index.js');

// describe("gravity", function() {
//   it("is a fundamental law, so tautologies had better work", function() {
//     expect(true).toBe(true);
//     expect(false).toBeFalsy();
//     expect(0).toBeLessThan(1);
//     expect(1).not.toBeLessThan(0);
//   });
// });


describe("fallingTime", function () {
	it("should tell how long it takes to fall x meters", function () {
		expect( fns.fallingTime(4) ).toEqual(0.9035079029052512);
		expect( fns.fallingTime(4) ).toBeCloseTo(0.9, 2);
	});
});

describe( 'calculateInterest', function() {
	it( 'calculates the right interest', function() {
		expect( fns.calculateInterest(0.06, 10, 100) ).toEqual(182.2118800390509);
		expect( fns.calculateInterest(6, 10, 100) ).toEqual(182.2118800390509);
		expect( fns.calculateInterest(0.06, 10, 100) ).toBeCloseTo(182.21, 2);
		expect( fns.calculateInterest(6, 10, 100) ).toBeCloseTo(182.21, 2);
	});
});

describe( 'people', function() {
	it( 'add one year to each person', function() {
		var arr = [10, 12, 15, 25, 50];
		expect( fns.people(arr) ).toEqual([11, 13, 16, 26, 51]);
	});
});