/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
    let maxWidth = 0;
    const stack = [0]
    for(let i = 1; i < nums.length; i++){
        if(nums[i] < nums[stack[stack.length - 1]]){
            stack.push(i);
        }
    }
    for(let i = nums.length - 1; i >= 0; i--){
        while(stack.length > 0 && nums[i] >= nums[stack[stack.length - 1]]){
            maxWidth = Math.max(maxWidth, i - stack[stack.length - 1]);
            stack.pop()
        }

    }

    return maxWidth;
};