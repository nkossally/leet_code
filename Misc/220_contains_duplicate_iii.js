/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
    const numToIdx = {}
    let result = false

    // Create sliding window and map each value in array to its val/valueDiff. See if the transformed value or one less or one more is in the map
    for (let i = 0; i < nums.length; i++) {
        const transformedVal = Math.round(nums[i] / (valueDiff + 1))
        // console.log(numToIdx, i, transformedVal)
        if (numToIdx[transformedVal] !== undefined || (numToIdx[transformedVal - 1] !== undefined && Math.abs(nums[numToIdx[transformedVal - 1]] - nums[i]) <= valueDiff) || (numToIdx[transformedVal + 1] !== undefined && Math.abs(nums[numToIdx[transformedVal + 1]] - nums[i]) <= valueDiff)) {
            result = true;
            break
        }
        numToIdx[transformedVal] = i
        if (i >= indexDiff) {
            const transformedLeftNum = Math.round(nums[i - indexDiff] / (valueDiff + 1))
            delete numToIdx[transformedLeftNum]
        }

    }

    return result

};