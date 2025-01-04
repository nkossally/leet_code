/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function (nums, k) {
    nums.sort((a, b) => a - b)
    const left = nums[0] + k
    const right = nums[nums.length - 1] - k
    let range = nums[nums.length - 1] - nums[0]

    for(let i = 0; i < nums.length - 1; i++){
        const num1 = nums[i + 1] - k
        const num2 = nums[i] + k
        const iMax = Math.max(num2, right)
        const iMin = Math.min(num1, left)

        range = Math.min(range, iMax - iMin)

    }

    return range
};