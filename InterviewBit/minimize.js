module.exports = {
  //param A : array of integers
  //param B : array of integers
  //param C : array of integers
  //return an integer
  minimize: function (A, B, C) {
    let i = 0;
    let j = 0;
    let k = 0;
    let globalMin = 1 / 0;

    while (i < A.length && j < B.length && k < C.length) {
      let min = Math.min(A[i], B[j]);
      min = Math.min(min, C[k]);
      let max = Math.max(A[i], B[j]);
      max = Math.max(max, C[k]);
      const diff = max - min;
      globalMin = Math.min(diff, globalMin);
      if (min === A[i]) i++;
      if (min === B[j]) j++;
      if (min === C[k]) k++;
    }
    return globalMin;
  },
};
