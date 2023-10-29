// Very interesting binary search solution to dividing up books
// such that it minimizes the max number of pages assigned to one person

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  books: function (A, B) {
    if (A.length < B) return -1;

    const isValid = (target) => {
      let count = 0;
      let i = 0;
      let currSum = 0;
      while (i < A.length) {
        if (currSum + A[i] <= target) {
          currSum += A[i];
        } else {
          currSum = A[i];
          count++;
        }
        i++;
      }
      return count < B;
    };

    let totalSum = 0;
    let max = A[0];
    for (let i = 0; i < A.length; i++) {
      totalSum += A[i];
      max = Math.max(max, A[i]);
    }

    let lowerBound = max;
    let upperBound = totalSum;
    let result;

    while (upperBound >= lowerBound) {
      const mid = Math.floor((upperBound + lowerBound) / 2);
      if (isValid(mid)) {
        result = mid;
        upperBound = mid - 1;
      } else {
        lowerBound = mid + 1;
      }
    }
    return result;
  },

  booksBadVersion: function (A, B) {
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
};

module.exports.books2([12, 34, 67, 90], 2);
