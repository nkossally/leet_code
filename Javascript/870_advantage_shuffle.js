/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    const nums1Cpy = [...nums1]
    nums1Cpy.sort((a,  b) => a - b)
    const nums2WithIdx = nums2.map((elem, i) => [elem, i])
    nums2WithIdx.sort((a,  b) => a[0] - b[0])

    const reordedArr = []
    let nums2Idx = 0;
    let nums1Idx = 0;

    while(nums1Idx < nums1Cpy.length){
        while(nums1Idx < nums1Cpy.length && nums1Cpy[nums1Idx] <= nums2WithIdx[nums2Idx][0]){
            nums1Idx++
        }
        if(nums1Idx < nums1Cpy.length){
            const idx = nums2WithIdx[nums2Idx][1]
            reordedArr[idx] = nums1Cpy[nums1Idx]
            nums1Cpy.splice(nums1Idx, 1)
            nums2Idx++
        }
    }

    for(let i = 0; i < nums1.length; i++){
        if(reordedArr[i] === undefined) reordedArr[i]= nums1Cpy.shift()
    } 

    return reordedArr
    
};