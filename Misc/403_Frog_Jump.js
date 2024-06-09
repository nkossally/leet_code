/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const dp = [new Set([0])]

    const helper = (idx) => {
        const newJumps = new Set()

        for(let i = 0; i <  idx; i++){
            const prev = stones[i]
            const jumps = Array.from(dp[i])
            for(let j = 0; j < jumps.length; j++){
                const jump = jumps[j]

                const next1 = jump - 1
                const next2 = jump
                const next3 = jump + 1

                if(next1 > 0 && prev + next1 === stones[idx]){
                    newJumps.add(next1)
                }
                if(next2 > 0 && prev + next2 === stones[idx]){
                    newJumps.add(next2)
                }
                if(next3 > 0 && prev + next3 === stones[idx]){
                    newJumps.add(next3)
                }
            }
        }

        dp[idx] = newJumps
    }

    for(let i = 1; i < stones.length; i++){
        helper(i)
    }



    return dp[stones.length - 1].size > 0 ? true : false
    
};