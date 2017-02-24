// define isLeapYear as a function
var isLeapYear = (year) => {

	// check to see that year is numeric
	if (isNaN(year)) {
		throw new Error("Error: Input must be numeric");
	}

	// check to see that the year is an integer
	if (!Number.isInteger(+year)) {
		throw new Error("Error: Input must be an integer value");
	}

	if(0 === year % 400 || (0 === year % 4 && 0 !== year % 100)) {
		return true;
	}
	return false;


	// //is year divisible by 400?
	// if (0 === year % 400) {
	// 	return true;
	// }

	// //is year divisible by 100?
	// if (0 === year % 100) {
	// 	return false;
	// }

	// //otherwise, is year divisible by 4?
	// return (0 === year % 4);
	
};

// exports isLeapYear for use in other contextsß

module.exports = isLeapYear;