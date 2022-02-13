/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
   k = k % nums.length;
    
    reverse(nums, 0, nums.length - 1);
    reverse(nums, k, nums.length - 1);
    reverse(nums, 0, k - 1);
};

// the reverse function does the following
let reverse = function(nums, start, end) {
    //it exchanges the numbers between starting position to ending
    // for example it exchanges arr[0]=arr[arr.length-1]
    // this need to be written as start<end, when they are the same it stops exchanging
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }  
};