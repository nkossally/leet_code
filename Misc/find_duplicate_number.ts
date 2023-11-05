/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums)
    let upperBound = nums.length - 1;
    let lowerBound = 0;
    
    while(upperBound >= lowerBound){
        const mid = Math.floor((upperBound + lowerBound)/2);
        const curr = nums[mid];
        
        if(curr === nums[mid +1] || curr === nums[mid-1]){
            return curr;
        }

        if(curr >= mid + 1){
            lowerBound = mid + 1;
        } else {
            upperBound = mid - 1;
        }
        
    } 
    
};