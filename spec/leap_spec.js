// import the code to be tested
var isLeapYear = require("../index");

describe("A program to determine if a year is a leap year", () => {

	it("defines a fucntion called isLeapYear", () => {

		expect(isLeapYear).tobeDefined();
		expect(typeof isLeapYear).tobe("function");


});

}); 