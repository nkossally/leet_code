/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//iterative
var search = function(nums, target) {
    let lowerBound = 0;
    let upperBound = nums.length-1;
    
    while(upperBound >= lowerBound){
        const mid = Math.floor((upperBound + lowerBound)/2)
        const curr = nums[mid]
        if(target === curr) return mid;
        if(target > curr){
            lowerBound = mid + 1;
        }
        
       if(target < curr){
            upperBound = mid - 1;
        }
        
    }
    
    return -1;
    
};
