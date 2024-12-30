/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function (n, minProfit, group, profit) {
    // dp[i][j] is ways to get to profit i with at most j people
    const dp = []

    const getDp = (i, j) => {
        if (!dp[i]) return 0
        if ((!dp[i][j])) return 0
        return dp[i][j]
    }

    const setDp = (i, j, val) => {
        if (!dp[i]) dp[i] = []
        dp[i][j] = val
    }

    setDp(0,0, 1)

    for (let i = 0; i <= group.length; i++) {
        const peopleNeeded = group[i]
        const profitAdded = profit[i]

        for(let j = minProfit; j >= 0; j--){
            for(let k = n - peopleNeeded; k >= 0; k--){
                const totalProfit = Math.min(minProfit, j + profitAdded)
                const prevCount1 = getDp(j, k)
                const prevCount2 = getDp(totalProfit, peopleNeeded + k)
                const total = (prevCount1 + prevCount2 ) % (Math.pow(10, 9) + 7)
                setDp(totalProfit, peopleNeeded + k, total )
            }
        }

    }

    let count = 0

    for (let j = 0; j <= n; j++) {
        count += getDp(minProfit, j)
        count = count % (Math.pow(10, 9) + 7)
    }

    return count 
};