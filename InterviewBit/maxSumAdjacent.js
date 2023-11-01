module.exports = {
  //param A : array of array of integers
  //return an integer
  adjacent: function (A) {
    if (A.length === 0) return 0;
    if (A[0].length === 0) return 0;
    if (A[0].length === 1) return Math.max(A[0][0], A[1][0]);
    const dp = [Math.max(A[0][0], A[1][0])];
    const colMax = Math.max(A[0][1], A[1][1]);
    dp[1] = Math.max(colMax, dp[0]);

    for (let i = 2; i < A[0].length; i++) {
      const colMax = Math.max(A[0][i], A[1][i]);
      const way1 = dp[i - 2] + colMax;
      dp[i] = Math.max(way1, dp[i - 1]);
    }

    console.log(dp)
    return dp[A.length - 1];
  },
};

module.exports.adjacent([
    [74, 37, 82, 1],
    [66, 38, 16, 1]
  ])