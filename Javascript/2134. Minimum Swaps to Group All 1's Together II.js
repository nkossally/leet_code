/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
    let onesCount = 0
    const onesCounts = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1) onesCount++
        onesCounts.push(onesCount)
    }
    if(onesCount === 0 || onesCount === nums.length) return 0
    let minDiff = 1/0;
    for(let left = 0; left < nums.length; left++){
        let right = (left + onesCount - 1 ) % nums.length
        let totalOnes  = 0
        if(right > left){
            totalOnes += onesCounts[right]
            if(left > 0) totalOnes -= onesCounts[left - 1]
        } else {
             totalOnes += (onesCount - onesCounts[left - 1])
             totalOnes += onesCounts[right]

        }
        const diff = onesCount - totalOnes
        minDiff = Math.min(minDiff, diff)
    } 

    return minDiff
};