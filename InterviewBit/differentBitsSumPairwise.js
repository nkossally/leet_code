module.exports = {
  //param A : array of integers
  //return an integer
  cntBits: function (A) {
    let diff = 0;
    for (let i = 0; i < A.length; i++) {
      for (let j = i; j < A.length; j++) {
        currDiff = (A[i] ^ A[j])
          .toString(2)
          .split("1")
          .length - 1;
        const multiplier = i === j ? 1 : 2
        diff += multiplier * currDiff;
      }
    }
    console.log(diff)
    return diff;
  },
};
module.exports.cntBits([1, 3, 5]);
