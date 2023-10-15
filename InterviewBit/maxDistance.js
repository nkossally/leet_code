// Given an array A of integers, find the maximum of j - i subjected to the constraint of A[i] <= A[j].
module.exports = {
  //param A : array of integers
  //return an integer
  maximumGap: function (A) {
    let n = A.length;
    const rightMax = [];
    rightMax[n - 1] = A[n - 1];
    for (let i = n - 2; i >= 0; i--)
      rightMax[i] = Math.max(rightMax[i + 1], A[i]);

    let maxDist = -1 / 0;
    let i = 0,
      j = 0;
    while (i < n && j < n) {
      if (rightMax[j] >= A[i]) {
        maxDist = Math.max(maxDist, j - i);
        j++;
      } else i++;
    }
    return maxDist;
  },
};
