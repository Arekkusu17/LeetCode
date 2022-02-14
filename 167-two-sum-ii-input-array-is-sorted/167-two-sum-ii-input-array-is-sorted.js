/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let lower=0;
    let higher=numbers.length-1;
    
    while(higher>lower){   
        let sum=numbers[lower]+numbers[higher];
        
        if(sum<target){
            lower++;            
        } else if(sum>target){
            higher--;
        } else {
            return [lower+1,higher+1]
        }        
    }
};