//param A : array of array of integers
//return an integer
function minPathSum(A) {
  if (A.length < 1) return 0;
  if (A[0].length < 1) return 0;

  const dp = [];
  for (let i = 0; i < A.length; i++) {
    dp.push([]);
  }

  dp[0][0] = A[0][0];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      const down = i > 0 ? dp[i - 1][j] : 1 / 0;
      const right = j > 0 ? dp[i][j - 1] : 1 / 0;
      if (!(i === 0 && j === 0)) {
        dp[i][j] = Math.min(right, down) + A[i][j];
      }
    }
  }
  console.log(dp)
  return dp[A.length - 1][A[0].length - 1];
}

const A = [
    [20, 29, 84, 4, 32, 60, 86, 8, 7, 37],
    [77, 69, 85, 83, 81, 78, 22, 45, 43, 63],
    [60, 21, 0, 94, 59, 88, 9, 54, 30, 80],
    [40, 78, 52, 58, 26, 84, 47, 0, 24, 60],
    [40, 17, 69, 5, 38, 5, 75, 59, 35, 26],
    [64, 41, 85, 22, 44, 25, 3, 63, 33, 13],
    [2, 21, 39, 51, 75, 70, 76, 57, 56, 22],
    [31, 45, 47, 100, 65, 10, 94, 96, 81, 14]
  ]
  
minPathSum(A)