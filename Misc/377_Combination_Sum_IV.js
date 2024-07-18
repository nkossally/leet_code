/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    const dp = [1]
    const numsSet = new Set(nums)

    for(i = 1; i <= target; i++){
        dp[i] = 0;
        for(let j = 0; j < i; j++){
            const diff = i - j;
            if(numsSet.has(diff)){
                dp[i] += dp[j]
            }
        }
    }

    return dp[target]
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4_v1 = function (nums, target) {

    const mem = {}

    const choose = (n, k) => {
        if (mem[n]) {
            if (mem[n][k] !== undefined) {
                return mem[n][k]
            }
        }
        let result = 1;
        const max = Math.max(k, n - k)
        const min = Math.min(k, n - k)
        let num = max + 1;
        let denom = min
        while (num <= n) {
            result *= num
            num++
        }
        while (denom >= 2) {
            result /= denom
            denom--
        }
        if (!mem[n]) {
            mem[n] = {}
        }
        mem[n][k] = result
        return result
    }

    let count = 0;

    const getSum = (currSum, idx, quantities) => {
        if (currSum === target) {

            let product = 1;
            let quantitiesSum = quantities.reduce((acc, curr) => acc + curr, 0)
            for (let i = 0; i < quantities.length; i++) {
                product *= choose(quantitiesSum, quantities[i])
                quantitiesSum -= quantities[i]
            }
            count += product
            return
        }
        if (idx === nums.length) return

        const k = Math.floor((target - currSum) / nums[idx])
        for (let i = 0; i <= k; i++) {
            getSum(currSum + i * nums[idx], idx + 1, [...quantities, i])
        }
    }

    getSum(0, 0, [])

    return count
};