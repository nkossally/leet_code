module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    const oddSum = [];
    const evenSum = [];
    let count = 0;

    for (let i = 0; i < A.length; i++) {
      const evenPrev = i > 0 ? evenSum[i - 1] : 0;
      const oddPrev = i > 0 ? oddSum[i - 1] : 0;
      if (i % 2 === 0) {
        evenSum.push(evenPrev + A[i]);
        oddSum.push(oddPrev);
      } else {
        evenSum.push(evenPrev);
        oddSum.push(oddPrev + A[i]);
      }
    }

    for (let i = 0; i < A.length; i++) {
      const evensBefore = i > 0 ? evenSum[i - 1] : 0;
      const oddsBefore = i > 0 ? oddSum[i - 1] : 0;
      const evensAfter = i < A.length ? oddSum[A.length - 1] - oddSum[i] : 0;
      const oddsAfter = i < A.length ? evenSum[A.length - 1] - evenSum[i] : 0;
      if (evensBefore + evensAfter === oddsBefore + oddsAfter) count++;
    }

    return count;
  },
};
