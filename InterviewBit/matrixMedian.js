module.exports = {
  //param A : array of array of integers
  //return an integer
  findMedian: function (A) {
    const mid = Math.ceil((A.length * A[0].length) / 2);
    const medians = [];
    const midIdx = Math.floor(A[0].length / 2);
    for (let i = 0; i < A.length; i++) {
      medians.push(A[i][midIdx]);
    }
    medians.sort((a, b) => a - b);
    console.log(medians);
    return medians[Math.floor(medians.length / 2)];
  },
};
const A = [
  [1, 3, 5],
  [2, 6, 9],
  [3, 6, 9],
];
module.exports.findMedian(A);
