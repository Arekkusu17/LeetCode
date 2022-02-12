/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let left=0,right=nums.length
    
    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        const current=nums[middle]

        if (current < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return left;
};
