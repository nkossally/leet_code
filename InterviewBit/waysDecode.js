//param A : string
//return an integer
const numDecodings = (A) => {
  if (A[0] === "0") return 0;
  if (A.length <= 1) return A.length;

  let dp = [];
  let cannotDecode = false;
  for (let i = 0; i < A.length; i++) {
    const prev = i > 0 ? parseInt(A[i - 1]) : null;
    const curr = parseInt(A[i]);
    const next = i < A.length - 1 ? parseInt(A[i + 1]) : null;

    if (next === 0) {
      if (curr === 1 || curr === 2) {
        dp[i] = 0;
      } else {
        cannotDecode = true;
      }
    } else if (curr === 0) {
      dp[i] = i > 1 ? dp[i - 2] : 1;
    } else if (prev === 1 || (prev === 2 && curr < 7)) {
      if (i === 1) {
        dp[i] = 2;
      } else {
        dp[i] = i >= 2 ? dp[i - 1] + dp[i - 2] : dp[i - 1] + 1;
      }
    } else {
      dp[i] = i > 0 ? dp[i - 1] : 1;
    }
  }

  return cannotDecode ? 0 : dp[A.length - 1] % (Math.pow(10, 9) + 7);
};

const numDecodingsRecursive = (str) => {
  if (str.length === 0) return 1;
  const val = parseInt(str[0]);
  if (val === 0) return 0;
  if (str.length > 0 && (val === 1 || (val === 2 && parseInt(str[1]) < 7))) {
    return numDecodingsRecursive(str.slice(1)) + numDecodingsRecursive(str.slice(2))
  }
  return numDecodingsRecursive(str.slice(1))
};
// numDecodings("2611055971756562");
console.log(numDecodingsRecursive("1212"));
console.log(numDecodingsRecursive("1212"));
