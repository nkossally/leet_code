/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    if (nums.length === 0) return 0

    const sums = []
    let sum = 0
    let maxSum = nums[0]

    for (let i = 0; i < nums.length; i++) {
        maxSum = Math.max(maxSum, nums[i])
        sum += nums[i]
        sums.push(sum)
    }

    let min = nums[0]
    let max = nums[0]

    for (let i = 0; i < sums.length - 1; i++) {
        const iSum = sums[i]

        maxSum = Math.max(maxSum, iSum)

        const sum1 = iSum - min

        // sum1 doesn't count if it is merely the first element minus the first element, or 0. If the array only has negative nunbers this would produce the wrong answer
        if(i !== 0) maxSum = Math.max(sum1, maxSum)

        const sum2 = sums[sums.length - 1] - iSum + max
        maxSum = Math.max(sum2, maxSum)

        // in case max is negative and we just want the sum of everthing after index i
        const sum3 = sums[sums.length - 1] - iSum
        maxSum = Math.max(maxSum, sum3)

        min = Math.min(min, iSum)
        max = Math.max(max, iSum)
    }
    return maxSum
};