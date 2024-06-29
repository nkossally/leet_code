/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
    if (nums.length === n) return 0

    let count = 0

    const getCanGetNum = num =>{
        let canGetNum = false

        const helper = (idx, sum) => {
            if(canGetNum) return
            if(sum === num) {
                canGetNum = true;
                return
            }
            if(idx === nums.length) return
            
            if(nums[idx] + sum > num) return

            helper(idx + 1, sum + nums[idx])
            helper(idx + 1, sum)
        }

        helper(0, 0)

        return canGetNum
    }

    let i = 1;
    let lastIdx = 0;
    while(i <= n){
        const numsSet = new Set(nums)
        if(!numsSet.has(i)){
            if(!getCanGetNum(i)){
                let idx = lastIdx;
                while(idx < nums.length && nums[idx] < i ){
                    idx++
                }
                nums.splice(idx, 0, i)
                lastIdx = idx
                count++
            }
        }
        i++
    }


    return count
};

console.log(minPatches([1,2,31,33] , 100))



/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatchesBetter = function (nums, n) {
    let miss = 1
    let  result = 0
    let i = 0

     while( miss <= n){
         if (i < nums.length && nums[i] <= miss){
             miss += nums[i]
             i += 1
         } else {
             miss += miss
             result += 1

         }
     }

     return result
};

console.log(minPatchesBetter([1,2,31,33] , 100))
console.log(minPatchesBetter([1,2,31,33] , 2147483647))
