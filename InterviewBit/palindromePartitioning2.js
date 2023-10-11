function minCut(A) {
  if (A.length <= 1) return 0;
  const dp = [0];
  const isPerfectPalindrome = (start, end) => {
    let pointer1 = start;
    let pointer2 = end;
    while (pointer1 < pointer2 && A[pointer1] === A[pointer2]) {
      pointer1++;
      pointer2--;
    }
    return pointer1 >= pointer2;
  };

  const getStartIdxOfPalindrome = (endIdx) => {
    let startIdx = 0;
    while (startIdx <= endIdx) {
      if (isPerfectPalindrome(startIdx, endIdx)) {
        break;
      }
      startIdx++;
    }
    return startIdx;
  };

  for (let i = 1; i < A.length; i++) {
    const startIdx = getStartIdxOfPalindrome(i);
    const val = startIdx > 0 ? dp[startIdx - 1] + 1 : 0;
    dp[i] = Math.min(dp[i - 1] + 1, val);
  }
  return dp[A.length - 1];
}
