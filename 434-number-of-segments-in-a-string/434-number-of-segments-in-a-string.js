/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let arr=s.split(" ").filter(word=>word.length>0)
    return arr.length
    
};