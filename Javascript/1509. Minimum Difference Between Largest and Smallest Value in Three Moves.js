/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    if (nums.length <= 4) return 0
    nums.sort((a, b) => a - b)

    const way1 = nums[nums.length - 1] - nums[3]
    const way2 = nums[nums.length - 2] - nums[2]
    const way3 = nums[nums.length - 3] - nums[1]
    const way4 = nums[nums.length - 4] - nums[0]

    let min = Math.min(way1, way2)
    min = Math.min(min, way3)
    min = Math.min(min, way4)

    return min

};