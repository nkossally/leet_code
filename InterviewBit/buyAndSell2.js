function maxProfit(A) {
  if (A.length <= 1) return 0;

  let dp = [0];

  for (let i = 1; i < A.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 1] + A[i] - A[i - 1]);
  }

  return dp[A.length - 1];
}
