module.exports = {
  //param A : array of integers
  //param B : array of integers
  //param C : array of integers
  //return an integer
  solve: function (A, B, C) {
    let i = 0;
    let j = 0;
    let k = 0;

    const getDiff = (a, b, c) => {
      let max = Math.max(A[a], B[b]);
      max = Math.max(max, C[c]);
      let min = Math.min(A[a], B[b]);
      min = Math.min(min, C[c]);
      return Math.abs(max - min);
    };

    getArrayWithMin = (a, b, c) => {
      let min = Math.min(A[a], B[b]);
      min = Math.min(min, C[c]);
      if (min === A[a]) {
        return 1;
      } else if (min === B[b]) {
        return 2;
      } else {
        return 3;
      }
    };

    let min = getDiff(0, 0, 0);
    while (true) {
      const arrWithMin = getArrayWithMin(i, j, k)
      if(arrWithMin === 1){
        if(i < A.length - 1){
            i++
        } else {
            break
        }
      } else if(arrWithMin === 2){
        if(j < B.length - 1){
            j++
        } else {
            break
        }

      } else {
        if(k < C.length - 1){
            k++
        } else {
            break
        }

      }
      min = Math.min(min, getDiff(i, j, k))
    }
    return min;
  },
};

const A = [1, 4, 5, 8, 10];
const B = [6, 9, 15];
const C = [2, 3, 6, 6];

module.exports.solve(A, B, C);
