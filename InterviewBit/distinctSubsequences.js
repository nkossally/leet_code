const numDistinct = function (A, B) {
  const dp = [];

  const newArr = [];
  for (let j = 0; j < B.length; j++) {
    newArr.push(-1);
  }

  for (let i = 0; i < A.length; i++) {
    dp.push(Array.from(newArr))
  }

  const helper = (i, j) => {
    console.log("helper", i, j)
    if (j < 0) return 1;
    if (i < 0) return 0;
    console.log(dp[i][j], dp[i][j] === -1)
    if (dp[i][j] !== -1) return dp[i][j];
    let pick = 0;
    if (A[i] === B[j]) {
      pick = helper(i - 1, j - 1);
    }
    const notPick = helper(i - 1, j);
    dp[i][j] = pick + notPick;
    return pick + notPick;
  }

  helper(A.length - 1, B.length - 1);
  console.log(dp);
  return dp[A.length - 1][B.length - 1];
};

numDistinct("aaaababbababbaabbaaababaaabbbaaabbb","bbababa" )