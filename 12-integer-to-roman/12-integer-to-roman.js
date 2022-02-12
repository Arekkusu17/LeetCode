/**
 * @param {number} num
 * @return {string}
 */

  class NumeralConverter {
	constructor (numberToConvert) {
		this.value = numberToConvert;
		this.numeral = '';
	}
	proccesNumeral (symbol, symbolValue) {
		while (this.value >= symbolValue) {
			this.numeral += symbol;
			this.value -= symbolValue;
		}
	}
}


var intToRoman = function(num) { 
	const converter = new NumeralConverter(num);
	converter.proccesNumeral('M', 1000);
	converter.proccesNumeral('CM', 900);
	converter.proccesNumeral('D', 500);
	converter.proccesNumeral('CD', 400);
	converter.proccesNumeral('C', 100);
	converter.proccesNumeral('XC', 90);
	converter.proccesNumeral('L', 50);
	converter.proccesNumeral('XL', 40);
	converter.proccesNumeral('X', 10);
	converter.proccesNumeral('IX', 9);
	converter.proccesNumeral('V', 5);
	converter.proccesNumeral('IV', 4);
	converter.proccesNumeral('I', 1);
	return converter.numeral;
}

