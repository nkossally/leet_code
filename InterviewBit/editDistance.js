function minDistance(A, B) {
  const dp = [];
  for (let i = 0; i < A.length; i++) {
    dp.push([]);
  }

  const recursion = (i, j) => {
    if (i === A.length) {
      return B.length - j;
    } else if (j === B.length) {
      return A.length - i;
    }
    const storedVal = dp[i][j];
    if (storedVal !== undefined) {
      return storedVal;
    }
    let result;
    if (A[i] === B[j]) {
      result = recursion(i + 1, j + 1);
    } else {
      const val1 = recursion(i, j + 1);
      const val2 = recursion(i + 1, j);
      const val3 = recursion(i = 1, j + 1);
      result = Math.min(val1, val2)
      result = Math.min(result, val3)
      result += 1;
    }
    dp[i][j] = result;
    console.log(i, j, result)
    return result;
  };
  recursion(0, 0);
  console.log(dp)
  return dp[0][0];
}
minDistance("aac", "abac")