module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of array of integers
  fourSum: function (A, B) {
    const result = [];
    const resultSet = new Set();

    let sums = {};

    for (let i = 0; i < A.length; i++) {
      for (let j = i + 1; j < A.length; j++) {
        const sum = A[i] + A[j];
        const elems = sums[B - sum];

        if (elems !== undefined) {
          elems.forEach((elem) => {
            const indices = elem[0];
            const vals = elem[1];
            const arr = vals.concat([A[i], A[j]]);
            arr.sort((a, b) => a - b);
            const allIndices = new Set(indices.concat([i, j]));
            if (allIndices.size === 4) {
              resultSet.add(JSON.stringify(arr));
            }
          });
        }
        if (sums[sum] === undefined) sums[sum] = [];
        sums[sum].push([
          [i, j],
          [A[i], A[j]],
        ]);
      }
    }
    resultSet.forEach((str) => {
      result.push(JSON.parse(str));
    });
    const sortFn = (a, b) => {
      let i = 0;
      while (i < a.length) {
        if (a[i] !== b[i]) break;
        i++;
      }
      if (i === a.length) return 0;
      return a[i] - b[i];
    };
    result.sort(sortFn);
    return result;
  },
};
const A = [
  9, -8, -10, -7, 7, -8, 2, -7, 4, 7, 0, -3, -4, -5, -1, -4, 5, 8, 1, 9, -2, 5,
  10, -5, -7, -1, -6, 4, 1, -5, 3, 8, -4, -10, -9, -3, 10, 0, 7, 9, -8, 10, -9,
  7, 8, 0, 6, -6, -7, 6, -4, 2, 0, 10, 1, -2, 5, -2,
];
module.exports.fourSum(A, 0);
