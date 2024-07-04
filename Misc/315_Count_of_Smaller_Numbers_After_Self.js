/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        result.push(0)
    }
    const numsWithOriginalIdx = []

    for (let i = 0; i < nums.length; i++) {
        numsWithOriginalIdx.push([nums[i], i])
    }

    const mergeSortAndCount = (start, end) => {
        if (start >= end) return

        const midIdx = Math.floor((start + end) / 2)

        const arr1 = mergeSortAndCount(start, midIdx)
        const arr2 = mergeSortAndCount(midIdx + 1, end)

        merge(start, midIdx, end)
    }

    const merge = (start, midIdx, end) => {
        let rightLessThanLeftCount = 0;

        let idx1 = start;
        let idx2 = midIdx + 1;
        const mergedArr = []

        while (idx1 <= midIdx && idx2 <= end) {
            if (numsWithOriginalIdx[idx2][0] < numsWithOriginalIdx[idx1][0]) {
                mergedArr.push(numsWithOriginalIdx[idx2])
                idx2++
                rightLessThanLeftCount++
            } else {
                mergedArr.push(numsWithOriginalIdx[idx1])
                const originalIdx = numsWithOriginalIdx[idx1][1]
                result[originalIdx] += rightLessThanLeftCount
                idx1++
            }
        }

        while (idx1 <= midIdx) {
            const originalIdx = numsWithOriginalIdx[idx1][1]
            result[originalIdx] += rightLessThanLeftCount
            mergedArr.push(numsWithOriginalIdx[idx1])
            idx1++
        }

        while (idx2 <= end) {
            mergedArr.push(numsWithOriginalIdx[idx2])
            idx2++
        }

        let idx = start;
        for(let i = 0; i < mergedArr.length; i++ ){
            numsWithOriginalIdx[idx] = mergedArr[i]
            idx++
        }
    }

    mergeSortAndCount(0, nums.length - 1)

    return result
};