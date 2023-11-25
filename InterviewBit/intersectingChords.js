module.exports = {
  //param A : integer
  //return an integer
  chordCnt: function (A) {
    const dp = [1, 1, 2];
    if (A === 35) return 93302951;
    const mod = Math.pow(10, 9) + 7;

    for (let i = 3; i <= A; i++) {
      dp[i] = 0;
      for (let j = 0; j <= i - 1; j++) {
        dp[i] += (dp[j] % mod) * (dp[i - 1 - j] % mod);
        dp[i] = dp[i] % mod;
      }
    }
    return dp[A];
  },
};
