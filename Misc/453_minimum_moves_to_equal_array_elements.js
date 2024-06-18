/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    nums.sort((a, b) => a - b)
    let count = 0

    while(nums[0] !== nums[nums.length - 1]){
        const diff = nums[nums.length - 1] - nums[0]
        for(let i = 0; i < nums.length - 1; i++){
            nums[i] += diff
        }
        const lastNum = nums.pop()
        nums.unshift(lastNum)
        count += diff
    }
    return count
};