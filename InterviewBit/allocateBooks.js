module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  books: function (A, B) {
    if (A.length < B) return -1;
    let minMax = 1 / 0;
    const getVal = (aIndex, student, maxPages) => {
      if (maxPages > minMax) return;
      if (A.length - aIndex < B - student + 1) return;

      if (student === B) {
        const pages = A.slice(aIndex).reduce((acc, curr) => acc + curr, 0);
        const max = Math.max(pages, maxPages);
        if (max < minMax) {
          minMax = max;
        }
        return;
      }
      for (let i = aIndex; i < A.length; i++) {
        const pages = A.slice(aIndex, i + 1).reduce(
          (acc, curr) => acc + curr,
          0
        );
        getVal(i + 1, student + 1, Math.max(maxPages, pages));
      }
    };
    getVal(0, 1, 0);
    return minMax;
  },
  
  books2: function (A, B) {
    if (A.length < B) return -1;
    let max = -1 / 0;
    let aIndex = 0;
    let bIndex = 0;
    const average = A.reduce((acc, curr) => acc + curr, 0) / A.length;
    let sumSoFar = 0;
    while (bIndex < B) {
      sumSoFar += A[aIndex];
      let currSum = A[aIndex];
      aIndex++;
      while (sumSoFar < average * (bIndex + 1) && aIndex < A.length) {
        currSum += A[aIndex];
        sumSoFar += A[aIndex];
        aIndex++;
      }
      if (bIndex === B - 1 && aIndex < A.length) {
        currSum += A[aIndex];
        aIndex++;
      }
      max = Math.max(currSum, max);
      bIndex++;
    }
    // console.log(max)

    return max;
  },
};

module.exports.books2([12, 34, 67, 90], 2);
