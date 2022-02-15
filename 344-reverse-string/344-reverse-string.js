/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let lower=0;
    let upper=s.length-1;
    
    while (lower<upper){
        let temp=s[lower];
        s[lower]=s[upper];
        s[upper]=temp;
        lower++;
        upper--;
    }
    
};