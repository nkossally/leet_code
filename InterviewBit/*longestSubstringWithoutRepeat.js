module.exports = {
  //param A : string
  //return an integer
  lengthOfLongestSubstring: function (A) {
    let max = 0;
    let vals = new Set();
    let j = 0;
    for (let i = 0; i < A.length; i++) {
      while (vals.has(A[i]) && j < A.length) {
        vals.delete(A[j]);
        j++;
      }
      vals.add(A[i]);
      max = Math.max(i - j + 1, max);
    }
    return max;
  },
};
