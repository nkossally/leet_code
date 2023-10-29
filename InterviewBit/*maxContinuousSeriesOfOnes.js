module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  maxone: function (A, B) {
    const createArr = (start, end) => {
      const arr = [];
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    };

    let left;
    let right;

    let i = 0;
    let zeroCount = 0;

    let start = 0;

    while (i < A.length) {
      if (A[i] === 0) {
        zeroCount++;
      }
      while (zeroCount > B) {
        if (A[start] === 0) {
          zeroCount--;
        }
        start++;
      }
      if (left === undefined || right - left < i - start) {
        left = start;
        right = i;
      }
      i++;
    }

    return createArr(left, right);
  },
};
