/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const dp = [0]
    let aCount = s[0] === "a" ? 1 : 0


    for(let i = 1; i < s.length; i++ ){
        if(s[i] === "b"){
            dp[i] = dp[i - 1]
        } else {
            aCount++
            dp[i] = Math.min(i + 1 - aCount, dp[i - 1] + 1)

        }
    }

    return dp[s.length - 1]
    
};