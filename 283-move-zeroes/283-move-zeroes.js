/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   let anchor=0;
    
    //explorer and anchor let us swap elements in the array when they are not 0
    //anchor starts at 0 and will cover every element of the array if needed    
    //explorer always get added 1, but anchor only sum 1+ when it's swapped (because there it keeps being a 0 in the array)
    
    for(let explorer=0;explorer<nums.length;explorer++){
        if(nums[explorer]!==0){
            let temp=nums[anchor];
            nums[anchor]=nums[explorer];
            nums[explorer]=temp;
            anchor++;
        }
    }
    
    
};