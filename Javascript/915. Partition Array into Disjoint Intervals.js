
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {

    let localMax = nums[0]
    let partitionIdx = 0
    let max = nums[0]


    for(let i = 1; i < nums.length; i++){
        if(localMax > nums[i]){
            partitionIdx = i
            localMax = max
        } else {
            max = Math.max(max, nums[i])
        }
    }

    return partitionIdx + 1



};

/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
    const maxFromLeft = []
    const minFromRight = []
    let rightMin = 1 / 0;
    let leftMax = -1 / 0

    for (let i = 0; i < nums.length; i++) {
        const val1 = nums[i]
        const val2 = nums[nums.length - 1 - i]
        leftMax = Math.max(leftMax, val1)
        rightMin = Math.min(rightMin, val2)
        maxFromLeft.push(leftMax)
        minFromRight.push(rightMin)

    }

    for (let i = 0; i < nums.length - 1; i++) {
        const leftMax = maxFromLeft[i]
        const rightMin = minFromRight[nums.length - (i + 1) - 1]

        if (leftMax <= rightMin) {
            return i + 1
        }
    }


};