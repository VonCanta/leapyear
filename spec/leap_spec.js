// import the code to be tested
var isLeapYear = require("../index");

describe("A program to determine if a year is a leap year", () => {

	it("defines a fucntion called isLeapYear", () => { 

		expect(isLeapYear).toBeDefined();
		expect(typeof isLeapYear).toBe("function");


});

it("can determine if a year is devisible by 4", () => {

	// years to test were selected because they fall
	// within a couple of hundred years before and after now
	expect(isLeapYear(1817)).toBe(false);
	expect(isLeapYear(1816)).toBe(true);
	expect(isLeapYear(1927)).toBe(false);
	expect(isLeapYear(1828)).toBe(true);
	expect(isLeapYear(2034)).toBe(false);
	expect(isLeapYear(2040)).toBe(true);
	expect(isLeapYear(2154)).toBe(false);
	expect(isLeapYear(2160)).toBe(true);

});

it("returns false for years divisble by 100", () => {
	expect(isLeapYear(1800)).toBe(false);
	
});

it("returns true for years divisible by 400", () => {
	expect(isLeapYear(3200)).toBe(true);
});

it("throws an exception if a non-integer value is submitted", () => {
	expect(isLeapYear.bind(null, "two thousand")).toThrowError("Error: Input must be numeric");
	expect(isLeapYear.bind(null, "2000")).not.toThrowError();
	expect(isLeapYear.bind(null, 2017.235)).toThrowError("Error: Input must be an integer value");

	});

}); 