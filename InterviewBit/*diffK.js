// find two indices of array of non negatives such that A[j] - A[i] === k
module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  diffPossible: function (A, B) {
    let i = 0;
    let j = 1;
    let result = 0;

    while (i < A.length && j < A.length) {
      if (A[j] - A[i] === B && i !== j) {
        result = 1;
        break;
      }
      if (A[j] - A[i] > B) {
        i++;
      } else {
        j++;
      }
    }
    return result;
  },
};
