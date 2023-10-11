function jumpSlower(A) {
  if (A.length <= 1) return 0;
  const dp = [0];

  const getJumpPositions = (idx) => {
    const indices = [];
    for (let i = 0; i < idx; i++) {
      if (i + A[i] >= idx) {
        indices.push(i);
      }
    }
    return indices;
  };

  for (let i = 1; i < A.length; i++) {
    const jumpIndices = getJumpPositions(i);
    let min = 1 / 0;
    jumpIndices.forEach((j) => {
      if (dp[j] !== undefined) {
        min = Math.min(min, dp[j] + 1);
      }
    });
    if (min !== 1 / 0) {
      dp[i] = min;
    }
  }
  return dp[A.length - 1] ? dp[A.length - 1] : -1;
}
