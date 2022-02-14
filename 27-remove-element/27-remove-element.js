/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
           let anchor=0;
    
    //explorer and anchor let us swap elements in the array when they are not val
    //anchor starts at 0 and will cover every element of the array if needed    
   
    
    for(let explorer=0;explorer<nums.length;explorer++){
        if(nums[explorer]!==val){            
            nums[anchor]=nums[explorer];            
            anchor++;
        }
    }
    return anchor;
};