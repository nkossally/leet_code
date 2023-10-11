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

function jump(A) {
  if (A.length <= 1) return 0;
  let current = 0;
  let farthest = 0;
  let jumps = 0;

  for (let i = 0; i < A.length - 1; i++) {
    farthest = Math.max(farthest, A[i] + i);
    if (i === current) {
      current = farthest;
      jumps++;
    }
  }
  return current >= A.length - 1 ? jumps : -1;
}
