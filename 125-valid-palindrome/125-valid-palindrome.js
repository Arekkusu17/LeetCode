/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(str) {
	let newString = str.replace(/[\W_]+/g, '').toLowerCase();

	for (let i = 0; i < newString.length; i++) {
		if (newString[i] !== newString[newString.length - 1 - i]) {
			return false;
		}
	}
	return true;
}


    
