module.exports = {
  //param A : array of integers
  //return an integer
  maxArr: function (A) {
    let max1 = -1 / 0;
    let max2 = -1 / 0;
    let max3 = -1 / 0;
    let max4 = -1 / 0;
    let min1 = 1 / 0;
    let min2 = 1 / 0;
    let min3 = 1 / 0;
    let min4 = 1 / 0;

    for (let i = 0; i < A.length; i++) {
      const val1 = A[i] + i;
      const val2 = A[i] - i;
      const val3 = -A[i] + i;
      const val4 = -A[i] - i;
      max1 = Math.max(max1, val1);
      min1 = Math.min(min1, val1);
      max2 = Math.max(max2, val2);
      min2 = Math.min(min2, val2);
      max3 = Math.max(max3, val3);
      min3 = Math.min(min3, val3);
      max4 = Math.max(max4, val4);
      min4 = Math.min(min4, val4);
    }

    const diff1 = max1 - min1;
    const diff2 = max2 - min2;
    const diff3 = max3 - min3;
    const diff4 = max4 - min4;

    let max = Math.max(diff1, diff2);
    max = Math.max(max, diff3);
    max = Math.max(max, diff4);

    return max;
  },
};
