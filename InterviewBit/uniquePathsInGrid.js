//param A : array of array of integers
//return an integer
const uniquePathsWithObstacles = (A) => {
  const dp = [];
  let n = A.length;
  if (n === 0) return 0;
  let m = A[0].length;
  if (m === 0) return 0;

  for (let i = 0; i < n; i++) {
    dp.push([]);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = A[0][0] === 0 ? 1 : 0;
        continue;
      } else if (A[i][j] === 1) {
        dp[i][j] = 0;
      } else if (A[i][j] === 0) {
        let above = i > 0 ? dp[i - 1][j] : 0;
        let left = j > 0 ? dp[i][j - 1] : 0;
        dp[i][j] = above + left;
      }
    }
  }
  console.log(dp)
  return dp[n - 1][m - 1];
};
uniquePathsWithObstacles([[0]])