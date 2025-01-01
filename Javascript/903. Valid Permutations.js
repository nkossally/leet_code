/**
 * @param {string} s
 * @return {number}
 */
var numPermsDISequence = function (s) {
    let count = 0
    const nums = []
    for (let i = 0; i <= s.length; i++) {
        nums.push(i)
    }

    // dp[i][j] means the number of possible permutations of first i + 1 digits, where the i + 1th digit is j + 1th smallest in the rest of unused digits.
    const dp = []

    const getMod = num => num % (7 + Math.pow(10, 9))

    const getDp = (i, j) => {
        if (!dp[i]) return 0
        if (!dp[i][j]) return 0
        return dp[i][j]
    }

    const setDp = (i, j, val) => {
        if (!dp[i]) dp[i] = []
        dp[i][j] = val
    }

    for (let j = 0; j <= s.length; j++) {
        setDp(0, j, 1)
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "D") {
            let curr = 0
            for (let j = s.length - i - 1; j >= 0; j--) {
                curr += getDp(i, j + 1)
                curr = getMod(curr)
                setDp(i + 1, j, curr)
            }
        } else {
            let curr = 0
            for (let j = 0; j < s.length - i; j++) {
                curr += getDp(i, j)
                curr = getMod(curr)
                setDp(i + 1, j, curr)
            }
        }

    }

    return getDp(s.length,0)
};