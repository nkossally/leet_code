module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  coinchange2: function (A, B) {
    let n = A.length;
    let mod = 1000007;
    const dp = []
    dp[0] = 1;

    for (let i=1; i<=n; i++) {
        for (let j=1; j<=B; j++) {
            if(dp[j] === undefined) dp[j] = 0;
            if (j >= A[i-1]) {
                dp[j] = (dp[j] + dp[j - A[i-1]]) % mod;
            }
        }
    }
    console.log(dp[B])
    return dp[B];
  },
};

module.exports.coinchange2([ 18, 24, 23, 10, 16, 19, 2, 9, 5, 12, 17, 3, 28, 29, 4, 13, 15, 8 ], 458)
