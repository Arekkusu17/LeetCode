/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   nums.forEach(function(item, index, arr) {
     arr[index] = Math.pow(item,2);
    });

    nums.sort(function(a,b){
    return a-b});

    return nums;
    
};