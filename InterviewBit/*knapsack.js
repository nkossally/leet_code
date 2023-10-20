module.exports = {
  //param A : array of integers
  //param B : array of integers
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    const dp = [];
    for (let i = 0; i <= C; i++) {
      dp.push(0);
    }

    for (let i = 0; i < A.length; i++) {
      for (let j = C; j >= B[i]; j--) {
        const val1 = dp[j];
        const val2 = j >= B[i] ? dp[j - B[i]] + A[i] : -1 / 0;
        dp[j] = Math.max(val1, val2);
      }
    }

    return dp[C];
  },
};
