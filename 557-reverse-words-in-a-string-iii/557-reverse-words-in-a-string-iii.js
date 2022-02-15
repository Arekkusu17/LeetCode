/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let tokens=s.split(" ");
    
    let words=tokens.map(elem=>elem.split("").reverse().join(""));
    return words.join(" ");    
};

