/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    // dp[a][b]
    const dp = {}
    let longest = 0

    const getDp = (a, b) =>{
        if(!dp[a]) return 0
        if( dp[a][b]) return dp[a][b]
        return 0
    }

    const setDp = (a, b, val) =>{
        if(!dp[a]) dp[a] = {}
        dp[a][b] = val
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < i; j++){
          const val1 = arr[i]
          const val2 = arr[j]
          if(val1 > val2){
            const diff = val1 - val2
            const seqLength = getDp(diff, val2)
            if(seqLength){
                const max = Math.max(seqLength + 1, getDp(val2, val1))
                setDp(val2, val1, max)
                longest = Math.max(longest, max)
            } else {
                setDp(val2, val1, 2)
            }
          }

        }
    }
    return longest
};