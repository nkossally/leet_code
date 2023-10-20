module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let i = 0;
    let result = 0;
    while (i < A.length) {
      let j = Math.min(A.length - 1, i + B - 1);
      while (j > i - B && A[j] === 0) {
        j--;
      }

      if (j <= i - B || j < 0) {
        result = -1;
        break;
      }
      console.log("at",i,"placing at ", j)
      result++;
      i = Math.max(i + 1, j + B)
    }
    return result;
  },
};
const A = [ 0, 0, 1, 1 ]
module.exports.solve(A, 2)